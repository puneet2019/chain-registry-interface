#!/usr/bin/env bash
# compile-go.sh — compile proto files to Go using protoc
#
# Usage:
#   bash compile-go.sh <chain_name> <version>
#
# Example:
#   bash compile-go.sh cosmoshub v25.2.0
#
# Prerequisites:
#   protoc, protoc-gen-go, protoc-gen-go-grpc
#
# Output:
#   proto/<chain>/go/<version>/

. "$(dirname "$0")/lib.sh"

CHAIN="$1"
VERSION="$2"

[ -z "$CHAIN" ] && fatal "usage: compile-go.sh <chain> <version>"
[ -z "$VERSION" ] && fatal "usage: compile-go.sh <chain> <version>"

need_cmd protoc

# Check for Go protoc plugins
if ! command -v protoc-gen-go >/dev/null 2>&1; then
  info "Installing protoc-gen-go..."
  go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
fi
if ! command -v protoc-gen-go-grpc >/dev/null 2>&1; then
  info "Installing protoc-gen-go-grpc..."
  go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
fi

PROTO_DIR="$PROTO_OUT_DIR/$CHAIN/raw/$VERSION/protos"
GO_OUT="$PROTO_OUT_DIR/$CHAIN/go/$VERSION"

[ ! -d "$PROTO_DIR" ] && fatal "Proto dir not found: $PROTO_DIR (run fetch first)"

PROTO_COUNT=$(count_protos "$PROTO_DIR")
[ "$PROTO_COUNT" -eq 0 ] && fatal "No proto files in $PROTO_DIR"

info "Compiling $PROTO_COUNT protos for $CHAIN@$VERSION -> Go"

mkdir -p "$GO_OUT"

# Only compile protos that have go_package set (others can't produce valid Go code)
PROTO_FILES=$(grep -rl 'option go_package' "$PROTO_DIR" --include='*.proto' || true)
NO_PKG_COUNT=$(grep -rL 'option go_package' "$PROTO_DIR" --include='*.proto' 2>/dev/null | wc -l | tr -d ' ')

if [ "$NO_PKG_COUNT" -gt 0 ]; then
  info "Skipping $NO_PKG_COUNT proto files without go_package option"
fi

if [ -z "$PROTO_FILES" ]; then
  warn "No proto files with go_package found"
  exit 0
fi

COMPILABLE=$(echo "$PROTO_FILES" | wc -l | tr -d ' ')
info "Compiling $COMPILABLE proto files..."

# Compile individually to handle failures gracefully
FAIL_COUNT=0
SUCCESS_COUNT=0
: > "$GO_OUT/compile_errors.log"

for proto in $PROTO_FILES; do
  if protoc \
    -I "$PROTO_DIR" \
    --go_out="$GO_OUT" \
    --go_opt=paths=source_relative \
    --go-grpc_out="$GO_OUT" \
    --go-grpc_opt=paths=source_relative \
    "$proto" 2>>"$GO_OUT/compile_errors.log"; then
    SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
  else
    FAIL_COUNT=$((FAIL_COUNT + 1))
  fi
done

if [ "$FAIL_COUNT" -gt 0 ]; then
  warn "$FAIL_COUNT proto files failed to compile (see $GO_OUT/compile_errors.log)"
fi

COMPILED=$(find "$GO_OUT" -name '*.go' -type f 2>/dev/null | wc -l | tr -d ' ')
info "Go compilation complete: $COMPILED .go files generated ($SUCCESS_COUNT succeeded, $FAIL_COUNT failed)"

# Update manifest with codegen info
MANIFEST="$PROTO_OUT_DIR/$CHAIN/raw/$VERSION/manifest.json"
if [ -f "$MANIFEST" ]; then
  python3 - "$MANIFEST" "$COMPILED" "$GO_OUT" "$(protoc --version 2>/dev/null | awk '{print $2}' || echo 'unknown')" << PYEOF
import json, sys
manifest = sys.argv[1]
compiled = int(sys.argv[2])
out_dir = sys.argv[3]
protoc_ver = sys.argv[4]
with open(manifest) as f:
    m = json.load(f)
m.setdefault('codegen', {})
m['codegen']['go'] = {
    'status': 'success' if compiled > 0 else 'failed',
    'files': compiled,
    'output_dir': out_dir,
    'protoc_version': protoc_ver
}
with open(manifest, 'w') as f:
    json.dump(m, f, indent=2)
PYEOF
fi
