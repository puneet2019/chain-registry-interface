#!/usr/bin/env bash
# registry.sh — main CLI for proto-registry
#
# Usage:
#   registry.sh fetch <chain>                         Fetch protos for a chain
#   registry.sh build <chain> [--go] [--ts] [--rust]  Fetch + compile
#   registry.sh discover [chain1 chain2 ...]          List chains from chain-registry
#   registry.sh info <chain>                          Show manifest for a chain
#   registry.sh build-all [--go] [--ts] [--rust]      Build all discovered chains

set -euo pipefail

SCRIPTS_DIR="$(cd "$(dirname "$0")" && pwd)"
. "$SCRIPTS_DIR/lib.sh"

CMD="${1:-help}"
shift || true

usage() {
  cat <<EOF
proto-registry — fetch and compile Cosmos chain proto files

Usage:
  registry.sh fetch <chain>                         Fetch protos for a chain
  registry.sh build <chain> [--go] [--ts] [--rust]  Fetch + compile
  registry.sh discover [chain1 chain2 ...]          List chains from chain-registry
  registry.sh info <chain>                          Show manifest for a chain
  registry.sh build-all [--go] [--ts] [--rust]      Build all discovered chains
  registry.sh help                                  Show this help

Examples:
  registry.sh build cosmoshub --go
  registry.sh fetch osmosis
  registry.sh discover cosmoshub osmosis
  registry.sh build-all --go
EOF
}

# Resolve chain info from chain-registry
resolve_chain() {
  local chain="$1"

  if [ -d "$CHAIN_REGISTRY_DIR/$chain" ] && [ -f "$CHAIN_REGISTRY_DIR/$chain/chain.json" ]; then
    local chain_json="$CHAIN_REGISTRY_DIR/$chain/chain.json"
    GIT_REPO=$(json_get "$chain_json" ".codebase.git_repo")
    # Prefer .codebase.tag (the actual git tag) over .codebase.recommended_version
    VERSION=$(json_get "$chain_json" ".codebase.tag")
    [ -z "$VERSION" ] && VERSION=$(json_get "$chain_json" ".codebase.recommended_version")

    # Check for pinned version in config
    CONFIG_FILE="$PROTO_REGISTRY_DIR/config/chains.json"
    if [ -f "$CONFIG_FILE" ]; then
      if command -v jq >/dev/null 2>&1; then
        PINNED=$(jq -r ".pin.\"$chain\".version // empty" "$CONFIG_FILE" 2>/dev/null)
      else
        PINNED=$(python3 -c "
import json
c = json.load(open('$CONFIG_FILE'))
v = c.get('pin',{}).get('$chain',{}).get('version','')
print(v)
" 2>/dev/null)
      fi
      [ -n "${PINNED:-}" ] && VERSION="$PINNED"
    fi

    [ -z "$GIT_REPO" ] && fatal "No git_repo in $chain/chain.json"
    [ -z "$VERSION" ] && fatal "No version found for $chain"
    return 0
  fi

  fatal "Chain '$chain' not found in chain-registry at $CHAIN_REGISTRY_DIR"
}

do_fetch() {
  local chain="$1"
  resolve_chain "$chain"
  info "Fetching $chain: $GIT_REPO@$VERSION"
  bash "$SCRIPTS_DIR/fetch.sh" "$chain" "$GIT_REPO" "$VERSION"
}

do_compile() {
  local chain="$1"
  shift
  local compile_go=false compile_ts=false compile_rust=false

  for arg in "$@"; do
    case "$arg" in
      --go)   compile_go=true ;;
      --ts)   compile_ts=true ;;
      --rust) compile_rust=true ;;
    esac
  done

  # Default to Go if no flags specified
  if ! $compile_go && ! $compile_ts && ! $compile_rust; then
    compile_go=true
  fi

  resolve_chain "$chain"

  if $compile_go; then
    info "Compiling Go bindings for $chain@$VERSION..."
    bash "$SCRIPTS_DIR/compile-go.sh" "$chain" "$VERSION"
  fi

  if $compile_ts; then
    if [ -f "$SCRIPTS_DIR/compile-ts.sh" ]; then
      info "Compiling TypeScript bindings for $chain@$VERSION..."
      bash "$SCRIPTS_DIR/compile-ts.sh" "$chain" "$VERSION"
    else
      warn "TypeScript compilation not yet implemented"
    fi
  fi

  if $compile_rust; then
    if [ -f "$SCRIPTS_DIR/compile-rust.sh" ]; then
      info "Compiling Rust bindings for $chain@$VERSION..."
      bash "$SCRIPTS_DIR/compile-rust.sh" "$chain" "$VERSION"
    else
      warn "Rust compilation not yet implemented"
    fi
  fi
}

do_info() {
  local chain="$1"
  local manifest_dir="$PROTO_OUT_DIR/$chain/raw"

  if [ ! -d "$manifest_dir" ]; then
    resolve_chain "$chain"
    info "Chain: $chain"
    info "  git_repo: $GIT_REPO"
    info "  version:  $VERSION"
    info "  status:   not fetched"
    return
  fi

  local latest
  latest=$(ls -1 "$manifest_dir" 2>/dev/null | sort -V | tail -1)
  if [ -n "$latest" ] && [ -f "$manifest_dir/$latest/manifest.json" ]; then
    cat "$manifest_dir/$latest/manifest.json"
  else
    info "No manifest found for $chain"
  fi
}

case "$CMD" in
  fetch)
    [ -z "${1:-}" ] && fatal "usage: registry.sh fetch <chain>"
    do_fetch "$1"
    ;;

  build)
    [ -z "${1:-}" ] && fatal "usage: registry.sh build <chain> [--go] [--ts] [--rust]"
    CHAIN="$1"
    shift
    do_fetch "$CHAIN"
    do_compile "$CHAIN" "$@"
    ;;

  discover)
    bash "$SCRIPTS_DIR/discover.sh" "$@"
    ;;

  info)
    [ -z "${1:-}" ] && fatal "usage: registry.sh info <chain>"
    do_info "$1"
    ;;

  build-all)
    FLAGS=("$@")
    info "Discovering chains..."
    while IFS= read -r record; do
      chain=$(echo "$record" | python3 -c "import json,sys; print(json.load(sys.stdin)['chain'])" 2>/dev/null) || continue
      info "=== Building $chain ==="
      do_fetch "$chain" || { warn "Failed to fetch $chain, skipping"; continue; }
      do_compile "$chain" "${FLAGS[@]}" || { warn "Failed to compile $chain, skipping"; continue; }
    done < <(bash "$SCRIPTS_DIR/discover.sh")
    info "Build-all complete"
    ;;

  help|--help|-h)
    usage
    ;;

  *)
    fatal "Unknown command: $CMD (try 'help')"
    ;;
esac
