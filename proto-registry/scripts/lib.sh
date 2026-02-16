#!/usr/bin/env bash
# lib.sh — shared utilities for proto-registry scripts
# Source this file: . "$(dirname "$0")/lib.sh"

set -euo pipefail

# --- Logging ---
info()  { echo "[proto-registry] $*"; }
warn()  { echo "[proto-registry] WARN: $*" >&2; }
fatal() { echo "[proto-registry] FATAL: $*" >&2; exit 1; }

# --- Dependency checks ---
need_cmd() {
  command -v "$1" >/dev/null 2>&1 || fatal "required command not found: $1"
}

# --- JSON helpers (uses python3 as jq fallback) ---
json_get() {
  local file="$1" path="$2"
  if command -v jq >/dev/null 2>&1; then
    jq -r "$path" "$file" 2>/dev/null
  else
    python3 -c "
import json
data = json.load(open('$file'))
keys = '$path'.strip('.').split('.')
for k in keys:
    if k and data is not None:
        data = data.get(k) if isinstance(data, dict) else None
print(data if data is not None else '')
" 2>/dev/null
  fi
}

# --- Filesystem helpers ---
mktempdir() {
  mktemp -d "${TMPDIR:-/tmp}/proto-registry.XXXXXX"
}

# --- Go helpers ---
ensure_go() {
  need_cmd go
  info "Go version: $(go version | awk '{print $3}')"
}

# --- Proto helpers ---
count_protos() {
  local dir="$1"
  find "$dir" -name '*.proto' -type f 2>/dev/null | wc -l | tr -d ' '
}

copy_protos() {
  local src="$1" dst="$2"
  if [ -d "$src" ]; then
    rsync -a --include='*/' --include='*.proto' --exclude='*' "$src/" "$dst/"
    # Go module cache files are read-only — make copied files writable
    chmod -R u+w "$dst" 2>/dev/null || true
  fi
}

# --- Go module helpers ---
# parse_gomod <go.mod path>
# Parses a go.mod file and outputs tab-separated lines:
#   module_path\tversion\tactual_module_path
# Handles both require and replace directives (replace overrides require).
parse_gomod() {
  local gomod="$1"
  python3 - "$gomod" << 'PYEOF'
import re, sys

gomod_path = sys.argv[1]
with open(gomod_path) as f:
    content = f.read()

requires = {}  # module -> version
replaces = {}  # module -> (actual_module, version)

# Parse require blocks
for m in re.finditer(r'require\s*\((.*?)\)', content, re.DOTALL):
    for line in m.group(1).strip().split('\n'):
        line = line.strip()
        if line and not line.startswith('//'):
            parts = line.split()
            if len(parts) >= 2:
                requires[parts[0]] = parts[1]

# Parse single-line requires
for m in re.finditer(r'^require\s+(\S+)\s+(\S+)', content, re.MULTILINE):
    requires[m.group(1)] = m.group(2)

# Parse replace blocks
for m in re.finditer(r'replace\s*\((.*?)\)', content, re.DOTALL):
    for line in m.group(1).strip().split('\n'):
        line = line.strip()
        if line and not line.startswith('//') and '=>' in line:
            left, right = line.split('=>', 1)
            left_parts = left.strip().split()
            right_parts = right.strip().split()
            if len(left_parts) >= 1 and len(right_parts) >= 1:
                orig_mod = left_parts[0]
                actual_mod = right_parts[0]
                actual_ver = right_parts[1] if len(right_parts) >= 2 else ''
                replaces[orig_mod] = (actual_mod, actual_ver)

# Parse single-line replaces
for m in re.finditer(r'^replace\s+(\S+)\s+\S*\s*=>\s*(\S+)\s*(\S*)', content, re.MULTILINE):
    orig_mod = m.group(1)
    actual_mod = m.group(2)
    actual_ver = m.group(3)
    # Skip local path replacements
    if actual_mod.startswith('.') or actual_mod.startswith('/'):
        continue
    replaces[orig_mod] = (actual_mod, actual_ver)

# Output: merge requires with replaces
for mod, ver in requires.items():
    if mod in replaces:
        actual_mod, actual_ver = replaces[mod]
        if actual_mod.startswith('.') or actual_mod.startswith('/'):
            continue  # skip local replacements
        print(f"{mod}\t{actual_ver or ver}\t{actual_mod}")
    else:
        print(f"{mod}\t{ver}\t{mod}")
PYEOF
}

# --- Root directory ---
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
PROTO_REGISTRY_DIR="$REPO_ROOT/proto-registry"
PROTO_OUT_DIR="$REPO_ROOT/proto"
CHAIN_REGISTRY_DIR="$REPO_ROOT/chain-registry"
