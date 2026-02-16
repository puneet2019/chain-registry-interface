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
# Exclude google/ well-known types — they're provided by the Go standard proto libraries
# (google.golang.org/protobuf, google.golang.org/genproto) and have conflicting package names
# when compiled with paths=source_relative
PROTO_FILES=$(grep -rl 'option go_package' "$PROTO_DIR" --include='*.proto' | grep -v "$PROTO_DIR/google/" || true)
NO_PKG_COUNT=$(grep -rL 'option go_package' "$PROTO_DIR" --include='*.proto' 2>/dev/null | wc -l | tr -d ' ')
GOOGLE_COUNT=$(grep -rl 'option go_package' "$PROTO_DIR/google/" --include='*.proto' 2>/dev/null | wc -l | tr -d ' ')

if [ "$NO_PKG_COUNT" -gt 0 ]; then
  info "Skipping $NO_PKG_COUNT proto files without go_package option"
fi
if [ "$GOOGLE_COUNT" -gt 0 ]; then
  info "Skipping $GOOGLE_COUNT google/ well-known protos (provided by standard libraries)"
fi

if [ -z "$PROTO_FILES" ]; then
  warn "No proto files with go_package found"
  exit 0
fi

COMPILABLE=$(echo "$PROTO_FILES" | wc -l | tr -d ' ')
info "Compiling $COMPILABLE proto files..."

# Compile all protos in a single batch for proper cross-file type resolution.
# Fall back to per-file identification of failures.
: > "$GO_OUT/compile_errors.log"

info "Batch-compiling all proto files..."
if protoc \
  -I "$PROTO_DIR" \
  --go_out="$GO_OUT" \
  --go_opt=paths=source_relative \
  --go-grpc_out="$GO_OUT" \
  --go-grpc_opt=paths=source_relative \
  $PROTO_FILES 2>"$GO_OUT/compile_errors.log"; then
  SUCCESS_COUNT=$COMPILABLE
  FAIL_COUNT=0
else
  # Batch failed — identify which protos fail and compile the rest in one batch
  info "Batch compilation had errors, identifying failing protos..."
  GOOD_PROTOS=""
  FAIL_COUNT=0
  SUCCESS_COUNT=0
  GO_TEST_DIR=$(mktemp -d)
  for proto in $PROTO_FILES; do
    if protoc -I "$PROTO_DIR" --go_out="$GO_TEST_DIR" --go_opt=paths=source_relative "$proto" 2>/dev/null; then
      GOOD_PROTOS="$GOOD_PROTOS $proto"
      SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
      FAIL_COUNT=$((FAIL_COUNT + 1))
    fi
  done
  rm -rf "$GO_TEST_DIR"
  # Batch-compile all good protos together
  if [ -n "$GOOD_PROTOS" ]; then
    find "$GO_OUT" -name '*.go' -delete 2>/dev/null || true
    protoc \
      -I "$PROTO_DIR" \
      --go_out="$GO_OUT" \
      --go_opt=paths=source_relative \
      --go-grpc_out="$GO_OUT" \
      --go-grpc_opt=paths=source_relative \
      $GOOD_PROTOS 2>>"$GO_OUT/compile_errors.log" || true
  fi
fi

if [ "$FAIL_COUNT" -gt 0 ]; then
  warn "$FAIL_COUNT proto files failed to compile (see $GO_OUT/compile_errors.log)"
fi

# Remove google/ output directory — these types come from standard Go libraries
rm -rf "$GO_OUT/google" 2>/dev/null || true

# Post-compilation: resolve Go package layout issues
# 1. Fix package conflicts: files in the same dir with different package names
# 2. Merge split packages: files with same package spread across parent/child dirs
python3 - "$GO_OUT" << 'PYEOF'
import os, sys, re, collections, shutil

go_out = sys.argv[1]

def get_package(fpath):
    """Extract Go package name from a .go file."""
    try:
        with open(fpath) as fh:
            for line in fh:
                m = re.match(r'^package\s+(\w+)', line)
                if m:
                    return m.group(1)
    except:
        pass
    return None

# Pass 1: Fix package conflicts within each directory
# (rename minority package declarations to match majority)
for dirpath, dirnames, filenames in os.walk(go_out):
    go_files = [f for f in filenames if f.endswith('.go')]
    if len(go_files) < 2:
        continue
    pkg_counts = collections.Counter()
    pkg_files = collections.defaultdict(list)
    for f in go_files:
        fpath = os.path.join(dirpath, f)
        pkg = get_package(fpath)
        if pkg:
            pkg_counts[pkg] += 1
            pkg_files[pkg].append(fpath)
    if len(pkg_counts) > 1:
        majority_pkg = pkg_counts.most_common(1)[0][0]
        fixed = 0
        for pkg, files in pkg_files.items():
            if pkg != majority_pkg:
                for fpath in files:
                    with open(fpath) as fh:
                        content = fh.read()
                    content = re.sub(
                        r'^(package\s+)\w+',
                        rf'\g<1>{majority_pkg}',
                        content,
                        count=1,
                        flags=re.MULTILINE
                    )
                    with open(fpath, 'w') as fh:
                        fh.write(content)
                    fixed += 1
        rel = os.path.relpath(dirpath, go_out)
        print(f"  Fixed conflict in {rel}: renamed {fixed} files to package '{majority_pkg}'")

# Pass 2: Merge split packages
# When parent and child dirs share the same package name, move parent's files
# into the child dir (child typically has more files and is the "real" location)
for dirpath, dirnames, filenames in os.walk(go_out):
    go_files = [f for f in filenames if f.endswith('.go')]
    if not go_files:
        continue
    parent_pkg = None
    parent_go_files = []
    for f in go_files:
        fpath = os.path.join(dirpath, f)
        pkg = get_package(fpath)
        if pkg:
            parent_pkg = pkg
            parent_go_files.append(fpath)
    if not parent_pkg:
        continue
    # Check each child directory
    for child_dir in dirnames:
        child_path = os.path.join(dirpath, child_dir)
        child_go_files = [f for f in os.listdir(child_path) if f.endswith('.go')]
        if not child_go_files:
            continue
        child_pkg = get_package(os.path.join(child_path, child_go_files[0]))
        if child_pkg == parent_pkg:
            # Same package in parent and child — move parent files to child
            # Parent files take priority on collision because child dir files
            # reference parent types via cross-proto imports
            moved = 0
            for fpath in parent_go_files:
                fname = os.path.basename(fpath)
                dest = os.path.join(child_path, fname)
                if os.path.exists(dest):
                    os.remove(dest)  # Remove child's version
                shutil.move(fpath, dest)
                moved += 1
            if moved:
                rel_parent = os.path.relpath(dirpath, go_out)
                rel_child = os.path.relpath(child_path, go_out)
                print(f"  Merged {rel_parent} -> {rel_child}: moved {moved} files (same package '{parent_pkg}')")
PYEOF

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

# --- Generate go.mod using the chain's own dependencies ---
GO_MOD_NAME="github.com/puneet2019/chain-registry-interface/proto/${CHAIN}/go/${VERSION}"
CHAIN_GOMOD="$PROTO_OUT_DIR/$CHAIN/raw/$VERSION/chain-go.mod"
info "Generating go.mod for $GO_MOD_NAME..."

if [ -f "$CHAIN_GOMOD" ]; then
  # Extract the chain's go version, require, and replace directives, use our module name
  python3 - "$CHAIN_GOMOD" "$GO_OUT/go.mod" "$GO_MOD_NAME" << 'PYEOF'
import re, sys

chain_gomod = sys.argv[1]
out_gomod = sys.argv[2]
mod_name = sys.argv[3]

with open(chain_gomod) as f:
    content = f.read()

# Extract go version
go_ver_m = re.search(r'^go\s+(\S+)', content, re.MULTILINE)
go_ver = go_ver_m.group(1) if go_ver_m else '1.21'

# Parse require entries as flat list of "module version"
requires = []
for m in re.finditer(r'require\s*\((.*?)\)', content, re.DOTALL):
    for line in m.group(1).strip().split('\n'):
        line = line.strip()
        if line and not line.startswith('//'):
            parts = line.split()
            if len(parts) >= 2:
                requires.append(f'{parts[0]} {parts[1]}')
for m in re.finditer(r'^require\s+(\S+)\s+(\S+)\s*$', content, re.MULTILINE):
    requires.append(f'{m.group(1)} {m.group(2)}')

# Parse replace entries as flat list of "old => new version"
# Only keep non-local replacements
replaces = []
for m in re.finditer(r'replace\s*\((.*?)\)', content, re.DOTALL):
    for line in m.group(1).strip().split('\n'):
        line = line.strip()
        if line and not line.startswith('//') and '=>' in line:
            left, right = line.split('=>', 1)
            right = right.strip()
            if not right.startswith('.') and not right.startswith('/'):
                # Normalize: "mod [ver] => target ver"
                left_parts = left.strip().split()
                right_parts = right.split()
                if len(right_parts) >= 2:
                    entry = f'{left_parts[0]} => {right_parts[0]} {right_parts[1]}'
                elif len(right_parts) == 1:
                    entry = f'{left_parts[0]} => {right_parts[0]}'
                else:
                    continue
                replaces.append(entry)
# Match inline replaces: "replace mod ver => target ver" (single-line, not block)
for m in re.finditer(r'^replace\s+([a-zA-Z][\S]*)\s+\S*\s*=>\s*(\S+)\s+(\S+)', content, re.MULTILINE):
    target = m.group(2)
    if not target.startswith('.') and not target.startswith('/'):
        replaces.append(f'{m.group(1)} => {m.group(2)} {m.group(3)}')

# Deduplicate
seen_req = set()
unique_requires = []
for r in requires:
    mod = r.split()[0]
    if mod not in seen_req:
        seen_req.add(mod)
        unique_requires.append(r)

seen_rep = set()
unique_replaces = []
for r in replaces:
    mod = r.split('=>')[0].strip().split()[0]
    if mod not in seen_rep:
        seen_rep.add(mod)
        unique_replaces.append(r)

# Write output go.mod
with open(out_gomod, 'w') as f:
    f.write(f'module {mod_name}\n\n')
    f.write(f'go {go_ver}\n\n')
    if unique_requires:
        f.write('require (\n')
        for r in unique_requires:
            f.write(f'\t{r}\n')
        f.write(')\n\n')
    if unique_replaces:
        f.write('replace (\n')
        for r in unique_replaces:
            f.write(f'\t{r}\n')
        f.write(')\n')
PYEOF
  info "Copied chain's go.mod dependencies"
else
  # Fallback: generate minimal go.mod
  GO_VER=$(go version | grep -oE 'go[0-9]+\.[0-9]+' | sed 's/go//')
  cat > "$GO_OUT/go.mod" <<GOMODEOF
module ${GO_MOD_NAME}

go ${GO_VER}

require (
	google.golang.org/protobuf v1.36.5
	google.golang.org/grpc v1.70.0
	google.golang.org/genproto/googleapis/api v0.0.0-20250212204824-5a70512c5d8b
)
GOMODEOF
  warn "No chain go.mod found — using minimal dependencies"
fi

# Run go mod tidy to resolve the full dependency tree
# GOWORK=off: prevents parent go.work from interfering
# GONOSUMCHECK=*: allows tidy to work with unpublished module names
# GONOSUMDB=*: skip sumdb lookups for unpublished modules
cd "$GO_OUT"
export GOWORK=off GONOSUMCHECK='*' GONOSUMDB='*' GOFLAGS=-mod=mod
go mod download 2>/dev/null || true
if go mod tidy 2>/dev/null; then
  info "go.mod generated and tidied successfully"
else
  warn "go mod tidy had errors — trying go get to resolve..."
  go get ./... 2>/dev/null || true
  go mod tidy 2>/dev/null || warn "go.mod may need manual fixes"
fi
cd "$REPO_ROOT"

info "Go codegen complete for ${CHAIN}@${VERSION}"
