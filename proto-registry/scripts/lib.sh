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

# --- Root directory ---
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
PROTO_REGISTRY_DIR="$REPO_ROOT/proto-registry"
PROTO_OUT_DIR="$REPO_ROOT/proto"
CHAIN_REGISTRY_DIR="$REPO_ROOT/chain-registry"
