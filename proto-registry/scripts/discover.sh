#!/usr/bin/env bash
# discover.sh — discover chains from chain-registry
#
# Usage:
#   bash discover.sh                    # discover all chains
#   bash discover.sh cosmoshub osmosis  # discover specific chains
#
# Output: newline-delimited JSON to stdout, one record per chain

. "$(dirname "$0")/lib.sh"

[ ! -d "$CHAIN_REGISTRY_DIR" ] && fatal "chain-registry not found at $CHAIN_REGISTRY_DIR (clone it first)"

CONFIG_FILE="$PROTO_REGISTRY_DIR/config/chains.json"

# Load skip list and pin map from config using python3 (no jq dependency)
SKIP_LIST=""
declare -A PIN_MAP 2>/dev/null || true  # associative arrays need bash 4+

if [ -f "$CONFIG_FILE" ]; then
  SKIP_LIST=$(python3 -c "
import json
c = json.load(open('$CONFIG_FILE'))
for s in c.get('skip', []):
    print(s)
" 2>/dev/null || true)

  while IFS='=' read -r key val; do
    [ -n "$key" ] && PIN_MAP["$key"]="$val"
  done < <(python3 -c "
import json
c = json.load(open('$CONFIG_FILE'))
for k, v in c.get('pin', {}).items():
    print(f\"{k}={v.get('version', '')}\")
" 2>/dev/null || true)
fi

is_skipped() {
  echo "$SKIP_LIST" | grep -qx "$1" 2>/dev/null
}

# If specific chains are requested, only process those
FILTER_CHAINS=("${@}")

process_chain() {
  local chain_dir="$1"
  local chain_name
  chain_name=$(basename "$chain_dir")
  local chain_json="$chain_dir/chain.json"

  [ ! -f "$chain_json" ] && return

  # Skip if in skip list
  is_skipped "$chain_name" && return

  # Filter if specific chains requested
  if [ ${#FILTER_CHAINS[@]} -gt 0 ]; then
    local found=false
    for fc in "${FILTER_CHAINS[@]}"; do
      [ "$fc" = "$chain_name" ] && found=true && break
    done
    $found || return
  fi

  # Extract fields using json_get (works with jq or python3 fallback)
  local git_repo version sdk_version ibc_version consensus_version
  git_repo=$(json_get "$chain_json" ".codebase.git_repo") || return
  [ -z "$git_repo" ] && return

  version=$(json_get "$chain_json" ".codebase.recommended_version")
  [ -z "$version" ] && version=$(json_get "$chain_json" ".codebase.tag")
  [ -z "$version" ] && return

  # Apply version pin if configured
  if [ -n "${PIN_MAP[$chain_name]+x}" ]; then
    version="${PIN_MAP[$chain_name]}"
  fi

  sdk_version=$(json_get "$chain_json" ".codebase.sdk.version") || sdk_version=""
  ibc_version=$(json_get "$chain_json" ".codebase.ibc.version") || ibc_version=""
  consensus_version=$(json_get "$chain_json" ".codebase.consensus.version") || consensus_version=""

  printf '{"chain":"%s","git_repo":"%s","version":"%s","sdk_version":"%s","ibc_version":"%s","consensus_version":"%s"}\n' \
    "$chain_name" "$git_repo" "$version" "$sdk_version" "$ibc_version" "$consensus_version"
}

# Process chain directories
for chain_dir in "$CHAIN_REGISTRY_DIR"/*/; do
  [ -d "$chain_dir" ] || continue
  process_chain "$chain_dir"
done

# Add manually configured chains
if [ -f "$CONFIG_FILE" ]; then
  python3 -c "
import json
c = json.load(open('$CONFIG_FILE'))
for a in c.get('add', []):
    print(json.dumps(a))
" 2>/dev/null || true
fi
