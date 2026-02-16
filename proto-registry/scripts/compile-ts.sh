#!/usr/bin/env bash
# compile-ts.sh — compile proto files to TypeScript using ts-proto
#
# Usage:
#   bash compile-ts.sh <chain_name> <version>
#
# Example:
#   bash compile-ts.sh cosmoshub v25.2.0
#
# Prerequisites:
#   protoc, protoc-gen-ts_proto (npm install -g ts-proto)
#
# Output:
#   proto/<chain>/ts/<version>/

. "$(dirname "$0")/lib.sh"

CHAIN="$1"
VERSION="$2"

[ -z "$CHAIN" ] && fatal "usage: compile-ts.sh <chain> <version>"
[ -z "$VERSION" ] && fatal "usage: compile-ts.sh <chain> <version>"

need_cmd protoc

# Check for ts-proto plugin
if ! command -v protoc-gen-ts_proto >/dev/null 2>&1; then
  info "Installing ts-proto globally..."
  npm install -g ts-proto
fi

PROTO_DIR="$PROTO_OUT_DIR/$CHAIN/raw/$VERSION/protos"
TS_OUT="$PROTO_OUT_DIR/$CHAIN/ts/$VERSION"

[ ! -d "$PROTO_DIR" ] && fatal "Proto dir not found: $PROTO_DIR (run fetch first)"

PROTO_COUNT=$(count_protos "$PROTO_DIR")
[ "$PROTO_COUNT" -eq 0 ] && fatal "No proto files in $PROTO_DIR"

info "Compiling $PROTO_COUNT protos for $CHAIN@$VERSION -> TypeScript"

mkdir -p "$TS_OUT"

# Collect all proto files
PROTO_FILES=$(find "$PROTO_DIR" -name '*.proto' -type f)

if [ -z "$PROTO_FILES" ]; then
  warn "No proto files found"
  exit 0
fi

COMPILABLE=$(echo "$PROTO_FILES" | wc -l | tr -d ' ')
info "Compiling $COMPILABLE proto files..."

# Compile all protos in a single batch for proper cross-file type resolution.
# Fall back to per-file identification of failures.
TS_PROTO_PLUGIN="protoc-gen-ts_proto=$(command -v protoc-gen-ts_proto)"
: > "$TS_OUT/compile_errors.log"

info "Batch-compiling all proto files..."
if protoc \
  -I "$PROTO_DIR" \
  --plugin="$TS_PROTO_PLUGIN" \
  --ts_proto_out="$TS_OUT" \
  --ts_proto_opt=esModuleInterop=true \
  --ts_proto_opt=outputServices=generic-definitions \
  --ts_proto_opt=useExactTypes=false \
  $PROTO_FILES 2>"$TS_OUT/compile_errors.log"; then
  SUCCESS_COUNT=$COMPILABLE
  FAIL_COUNT=0
else
  # Batch failed — identify which protos fail and compile the rest in one batch
  info "Batch compilation had errors, identifying failing protos..."
  GOOD_PROTOS=""
  FAIL_COUNT=0
  SUCCESS_COUNT=0
  TS_TEST_DIR=$(mktemp -d)
  for proto in $PROTO_FILES; do
    if protoc -I "$PROTO_DIR" --plugin="$TS_PROTO_PLUGIN" --ts_proto_out="$TS_TEST_DIR" "$proto" 2>/dev/null; then
      GOOD_PROTOS="$GOOD_PROTOS $proto"
      SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
      FAIL_COUNT=$((FAIL_COUNT + 1))
    fi
  done
  rm -rf "$TS_TEST_DIR"
  # Batch-compile all good protos together
  if [ -n "$GOOD_PROTOS" ]; then
    find "$TS_OUT" -name '*.ts' -delete 2>/dev/null || true
    protoc \
      -I "$PROTO_DIR" \
      --plugin="$TS_PROTO_PLUGIN" \
      --ts_proto_out="$TS_OUT" \
      --ts_proto_opt=esModuleInterop=true \
      --ts_proto_opt=outputServices=generic-definitions \
      --ts_proto_opt=useExactTypes=false \
      $GOOD_PROTOS 2>>"$TS_OUT/compile_errors.log" || true
  fi
fi

if [ "$FAIL_COUNT" -gt 0 ]; then
  warn "$FAIL_COUNT proto files failed to compile (see $TS_OUT/compile_errors.log)"
fi

COMPILED=$(find "$TS_OUT" -name '*.ts' -type f 2>/dev/null | wc -l | tr -d ' ')
info "TypeScript compilation complete: $COMPILED .ts files generated ($SUCCESS_COUNT succeeded, $FAIL_COUNT failed)"

# Update manifest with codegen info
MANIFEST="$PROTO_OUT_DIR/$CHAIN/raw/$VERSION/manifest.json"
if [ -f "$MANIFEST" ]; then
  python3 - "$MANIFEST" "$COMPILED" "$TS_OUT" "$(protoc --version 2>/dev/null | awk '{print $2}' || echo 'unknown')" << PYEOF
import json, sys
manifest = sys.argv[1]
compiled = int(sys.argv[2])
out_dir = sys.argv[3]
protoc_ver = sys.argv[4]
with open(manifest) as f:
    m = json.load(f)
m.setdefault('codegen', {})
m['codegen']['ts'] = {
    'status': 'success' if compiled > 0 else 'failed',
    'files': compiled,
    'output_dir': out_dir,
    'protoc_version': protoc_ver
}
with open(manifest, 'w') as f:
    json.dump(m, f, indent=2)
PYEOF
fi

# Generate package.json for the TypeScript package
PKG_VERSION="${VERSION#v}"  # strip leading v
cat > "$TS_OUT/package.json" <<PKGEOF
{
  "name": "@puneet_m/proto-${CHAIN}",
  "version": "${PKG_VERSION}-alpha.1",
  "description": "Protobuf TypeScript types for ${CHAIN} (${VERSION})",
  "license": "MIT",
  "main": "index.ts",
  "types": "index.ts",
  "dependencies": {
    "long": "^5.2.0",
    "protobufjs": "^7.2.0"
  }
}
PKGEOF

# Generate tsconfig.json
cat > "$TS_OUT/tsconfig.json" <<TSEOF
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": false,
    "esModuleInterop": true,
    "declaration": true,
    "outDir": "dist",
    "skipLibCheck": true
  },
  "include": ["**/*.ts"],
  "exclude": ["dist", "node_modules"]
}
TSEOF

info "Generated package.json and tsconfig.json for @puneet_m/proto-${CHAIN}@${PKG_VERSION}-alpha.1"
