#!/usr/bin/env bash
# compile-rust.sh — compile proto files to Rust using prost
#
# Usage:
#   bash compile-rust.sh <chain_name> <version>
#
# Example:
#   bash compile-rust.sh cosmoshub v25.2.0
#
# Prerequisites:
#   protoc, protoc-gen-prost (cargo install protoc-gen-prost protoc-gen-tonic)
#
# Output:
#   proto/<chain>/rust/<version>/

. "$(dirname "$0")/lib.sh"

CHAIN="$1"
VERSION="$2"

[ -z "$CHAIN" ] && fatal "usage: compile-rust.sh <chain> <version>"
[ -z "$VERSION" ] && fatal "usage: compile-rust.sh <chain> <version>"

need_cmd protoc

# Check for prost protoc plugins
if ! command -v protoc-gen-prost >/dev/null 2>&1; then
  info "Installing protoc-gen-prost..."
  cargo install protoc-gen-prost
fi
if ! command -v protoc-gen-tonic >/dev/null 2>&1; then
  info "Installing protoc-gen-tonic..."
  cargo install protoc-gen-tonic
fi

PROTO_DIR="$PROTO_OUT_DIR/$CHAIN/raw/$VERSION/protos"
RUST_OUT="$PROTO_OUT_DIR/$CHAIN/rust/$VERSION"

[ ! -d "$PROTO_DIR" ] && fatal "Proto dir not found: $PROTO_DIR (run fetch first)"

PROTO_COUNT=$(count_protos "$PROTO_DIR")
[ "$PROTO_COUNT" -eq 0 ] && fatal "No proto files in $PROTO_DIR"

info "Compiling $PROTO_COUNT protos for $CHAIN@$VERSION -> Rust"

mkdir -p "$RUST_OUT"

# Collect all proto files
PROTO_FILES=$(find "$PROTO_DIR" -name '*.proto' -type f)

if [ -z "$PROTO_FILES" ]; then
  warn "No proto files found"
  exit 0
fi

COMPILABLE=$(echo "$PROTO_FILES" | wc -l | tr -d ' ')
info "Compiling $COMPILABLE proto files..."

# Compile all protos in a single batch (required for prost — individual compilation
# overwrites same-package output files). Fall back to per-file for failures.
: > "$RUST_OUT/compile_errors.log"

info "Batch-compiling all proto files..."
if protoc \
  -I "$PROTO_DIR" \
  --prost_out="$RUST_OUT" \
  --tonic_out="$RUST_OUT" \
  $PROTO_FILES 2>"$RUST_OUT/compile_errors.log"; then
  SUCCESS_COUNT=$COMPILABLE
  FAIL_COUNT=0
else
  # Batch failed — identify which protos fail and compile the rest in one batch
  info "Batch compilation had errors, identifying failing protos..."
  GOOD_PROTOS=""
  FAIL_COUNT=0
  SUCCESS_COUNT=0
  for proto in $PROTO_FILES; do
    if protoc -I "$PROTO_DIR" --prost_out=/dev/null "$proto" 2>/dev/null; then
      GOOD_PROTOS="$GOOD_PROTOS $proto"
      SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
      FAIL_COUNT=$((FAIL_COUNT + 1))
    fi
  done
  # Batch-compile all good protos together
  if [ -n "$GOOD_PROTOS" ]; then
    rm -rf "$RUST_OUT"/*.rs "$RUST_OUT"/*/  2>/dev/null || true
    mkdir -p "$RUST_OUT"
    protoc \
      -I "$PROTO_DIR" \
      --prost_out="$RUST_OUT" \
      --tonic_out="$RUST_OUT" \
      $GOOD_PROTOS 2>>"$RUST_OUT/compile_errors.log" || true
  fi
fi

if [ "$FAIL_COUNT" -gt 0 ]; then
  warn "$FAIL_COUNT proto files failed to compile (see $RUST_OUT/compile_errors.log)"
fi

COMPILED=$(find "$RUST_OUT" -name '*.rs' -type f 2>/dev/null | wc -l | tr -d ' ')
info "Rust compilation complete: $COMPILED .rs files generated ($SUCCESS_COUNT succeeded, $FAIL_COUNT failed)"

# --- Post-codegen fixup: remove unconditional tonic includes from .rs files ---
# protoc-gen-prost emits include!("foo.tonic.rs") in the .rs files, but lib.rs
# already includes them with #[cfg(feature = "grpc")]. Remove the unconditional
# includes to prevent missing-tonic errors or duplicate definitions.
info "Removing unconditional tonic includes from .rs files..."
find "$RUST_OUT" -name '*.rs' ! -name '*.tonic.rs' ! -path '*/src/*' -type f | while read -r f; do
  sed -i '' '/^include!(".*\.tonic\.rs");$/d' "$f"
done

# --- Post-codegen fixup: fix derive trait issues in generated .rs files ---
# Two issues to fix:
# 1. Structs (::prost::Message) with Eq/Hash fail when they contain fields whose
#    types don't implement Eq/Hash (prost_types::Any/Timestamp/Duration, or other
#    generated structs that transitively contain them). Strip Eq/Hash from ALL structs.
# 2. Enums (::prost::Enumeration) with Ord need Eq (since Ord: Eq), but prost
#    sometimes generates Ord without Eq. Add Eq where Ord is present.
info "Fixing derive traits in generated .rs files..."
python3 - "$RUST_OUT" << 'PYEOF'
import os, re, sys

rust_out = sys.argv[1]
fixed = 0

for root, dirs, files in os.walk(rust_out):
    for fname in files:
        if not fname.endswith('.rs'):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath) as f:
            content = f.read()

        def fix_derive(m):
            traits = [t.strip() for t in m.group(1).split(',')]
            is_message = any('Message' in t for t in traits)
            is_oneof = any('Oneof' in t for t in traits)
            is_enum = any('Enumeration' in t for t in traits)

            if is_message or is_oneof:
                # Strip Eq and Hash from structs/oneofs — they cause cross-file issues
                traits = [t for t in traits if t not in ('Eq', 'Hash', '::prost::Eq', '::prost::Hash')]
            elif is_enum:
                # Enums with Ord need Eq
                has_ord = 'Ord' in traits
                has_eq = 'Eq' in traits
                if has_ord and not has_eq:
                    # Insert Eq after PartialEq
                    idx = next((i for i, t in enumerate(traits) if t == 'PartialEq'), -1)
                    if idx >= 0:
                        traits.insert(idx + 1, 'Eq')
                    else:
                        traits.insert(0, 'Eq')

            return '#[derive({})]'.format(', '.join(traits))

        new_content = re.sub(r'#\[derive\(([^)]*)\)\]', fix_derive, content)

        # Clean up empty derives or trailing commas
        new_content = re.sub(r'#\[derive\(\s*,', '#[derive(', new_content)
        new_content = re.sub(r',\s*\)\]', ')]', new_content)
        new_content = re.sub(r'#\[derive\(\s*\)\]\n?', '', new_content)

        if new_content != content:
            with open(fpath, 'w') as f:
                f.write(new_content)
            fixed += 1

print(f"Fixed derive traits in {fixed} files")
PYEOF

# Update manifest with codegen info
MANIFEST="$PROTO_OUT_DIR/$CHAIN/raw/$VERSION/manifest.json"
if [ -f "$MANIFEST" ]; then
  python3 - "$MANIFEST" "$COMPILED" "$RUST_OUT" "$(protoc --version 2>/dev/null | awk '{print $2}' || echo 'unknown')" << PYEOF
import json, sys
manifest = sys.argv[1]
compiled = int(sys.argv[2])
out_dir = sys.argv[3]
protoc_ver = sys.argv[4]
with open(manifest) as f:
    m = json.load(f)
m.setdefault('codegen', {})
m['codegen']['rust'] = {
    'status': 'success' if compiled > 0 else 'failed',
    'files': compiled,
    'output_dir': out_dir,
    'protoc_version': protoc_ver
}
with open(manifest, 'w') as f:
    json.dump(m, f, indent=2)
PYEOF
fi

# Generate Cargo.toml
cat > "$RUST_OUT/Cargo.toml" <<CARGOEOF
[package]
name = "${CHAIN}-proto"
version = "0.1.0-alpha.1"
edition = "2021"
description = "Protobuf Rust types for ${CHAIN} (${VERSION})"
license = "MIT"

[dependencies]
prost = "0.13"
prost-types = "0.13"

[dependencies.tonic]
version = "0.12"
optional = true

[features]
default = []
grpc = ["tonic"]
CARGOEOF

# Generate src/lib.rs with nested mod tree + include!() for each .rs file
mkdir -p "$RUST_OUT/src"
python3 - "$RUST_OUT" << 'PYEOF'
import os, sys
from collections import defaultdict

rust_out = sys.argv[1]
src_dir = os.path.join(rust_out, "src")

# Collect all .rs files (excluding src/ itself and compile_errors.log)
rs_files = []
for root, dirs, files in os.walk(rust_out):
    # Skip the src directory
    if root == src_dir or root.startswith(src_dir + os.sep):
        continue
    for f in files:
        if f.startswith('.'):
            continue
        if f.endswith('.rs'):
            rel = os.path.relpath(os.path.join(root, f), rust_out)
            rs_files.append(rel)

rs_files.sort()

# Build a tree: path components -> list of files at that level
class ModTree:
    def __init__(self):
        self.files = []  # (rel_path, is_tonic)
        self.children = {}  # name -> ModTree

    def add(self, parts, rel_path, is_tonic):
        if len(parts) == 0:
            self.files.append((rel_path, is_tonic))
        else:
            name = parts[0].replace('-', '_')
            if name not in self.children:
                self.children[name] = ModTree()
            self.children[name].add(parts[1:], rel_path, is_tonic)

tree = ModTree()
for rel in rs_files:
    parts = rel.split(os.sep)
    is_tonic = parts[-1].endswith('.tonic.rs')
    # The directory parts become the module path, the file is included at the leaf
    dir_parts = parts[:-1]
    tree.add(dir_parts, rel, is_tonic)

def emit(node, indent=0):
    lines = []
    pad = "    " * indent
    # Emit files at this level
    for rel_path, is_tonic in node.files:
        inc_path = "../" + rel_path
        if is_tonic:
            lines.append(f'{pad}#[cfg(feature = "grpc")]')
        lines.append(f'{pad}include!("{inc_path}");')
    # Emit child modules
    for name in sorted(node.children.keys()):
        child = node.children[name]
        lines.append(f'{pad}pub mod {name} {{')
        lines.extend(emit(child, indent + 1))
        lines.append(f'{pad}}}')
    return lines

with open(os.path.join(src_dir, "lib.rs"), "w") as f:
    f.write("// Auto-generated lib.rs -- do not edit manually\n\n")
    for line in emit(tree):
        f.write(line + "\n")
PYEOF

info "Generated Cargo.toml and src/lib.rs for ${CHAIN}-proto"
