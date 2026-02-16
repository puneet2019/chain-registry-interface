#!/usr/bin/env bash
# fetch.sh — fetch and merge proto files for a single chain
#
# Usage:
#   bash fetch.sh <chain_name> <git_repo> <version> [--force]
#
# Example:
#   bash fetch.sh cosmoshub https://github.com/cosmos/gaia v25.2.0
#
# Output:
#   proto/<chain>/raw/<version>/protos/   — merged proto tree
#   proto/<chain>/raw/<version>/manifest.json

. "$(dirname "$0")/lib.sh"

CHAIN="$1"
GIT_REPO="$2"
VERSION="$3"

[ -z "$CHAIN" ] && fatal "usage: fetch.sh <chain> <git_repo> <version>"
[ -z "$GIT_REPO" ] && fatal "usage: fetch.sh <chain> <git_repo> <version>"
[ -z "$VERSION" ] && fatal "usage: fetch.sh <chain> <git_repo> <version>"

ensure_go
need_cmd git
need_cmd rsync
need_cmd python3

OUT="$PROTO_OUT_DIR/$CHAIN/raw/$VERSION"

if [ -d "$OUT/protos" ] && [ -f "$OUT/manifest.json" ]; then
  EXISTING_COUNT=$(count_protos "$OUT/protos")
  if [ "$EXISTING_COUNT" -gt 0 ]; then
    info "$CHAIN@$VERSION already fetched ($EXISTING_COUNT protos). Skipping. Use --force to refetch."
    if [[ "${4:-}" != "--force" ]]; then
      exit 0
    fi
    info "Force refetching..."
  fi
fi

mkdir -p "$OUT/protos"
WORK=$(mktempdir)
trap 'rm -rf "$WORK"' EXIT

# --- Step 1: Clone chain repo ---
# Disable git-lfs — we only need proto files, not large binary assets
export GIT_LFS_SKIP_SMUDGE=1

info "Cloning $GIT_REPO@$VERSION..."
if ! git clone --depth 1 --branch "$VERSION" "$GIT_REPO" "$WORK/repo" 2>/dev/null; then
  # Try with v prefix if the version doesn't already have one
  if [[ "$VERSION" != v* ]] && git clone --depth 1 --branch "v$VERSION" "$GIT_REPO" "$WORK/repo" 2>/dev/null; then
    info "Cloned with v-prefixed tag v$VERSION"
  else
    info "Shallow clone failed, trying full clone..."
    if ! git clone "$GIT_REPO" "$WORK/repo" 2>/dev/null; then
      fatal "Failed to clone $GIT_REPO"
    fi
    (cd "$WORK/repo" && git checkout "$VERSION" 2>/dev/null) || fatal "Failed to checkout $VERSION"
  fi
fi

GIT_COMMIT=$(cd "$WORK/repo" && git rev-parse HEAD 2>/dev/null || echo "unknown")

# --- Step 2: Locate go.mod and module path ---
GO_MOD_DIR="$WORK/repo"
if [ ! -f "$GO_MOD_DIR/go.mod" ]; then
  for subdir in app golang/cosmos chain; do
    if [ -f "$WORK/repo/$subdir/go.mod" ]; then
      GO_MOD_DIR="$WORK/repo/$subdir"
      break
    fi
  done
fi

if [ ! -f "$GO_MOD_DIR/go.mod" ]; then
  warn "No go.mod found in $GIT_REPO@$VERSION — falling back to direct copy"
  FETCH_METHOD="direct-copy"
else
  FETCH_METHOD="go-module"
  MOD_PATH=$(head -1 "$GO_MOD_DIR/go.mod" | awk '{print $2}')
  info "Go module: $MOD_PATH"
fi

# --- Step 3: Copy chain's own protos ---
info "Copying chain protos..."
copy_protos "$WORK/repo/proto" "$OUT/protos"
copy_protos "$WORK/repo/third_party/proto" "$OUT/protos"

# Save the chain's go.mod for later use by compile-go.sh
if [ -f "$GO_MOD_DIR/go.mod" ]; then
  cp "$GO_MOD_DIR/go.mod" "$OUT/chain-go.mod"
fi

# --- Step 4: Resolve ALL dependencies via Go modules ---
# Uses the chain's own go.mod to resolve the full dependency tree,
# then scans every resolved module for proto/ directories.
# This catches all proto-bearing deps (cosmos-sdk, ibc-go, ics23, gogoproto, etc.)
# automatically, without maintaining a pattern list.
DEPS_JSON=""
if [ "$FETCH_METHOD" = "go-module" ]; then
  info "Resolving Go module dependencies..."

  GOWORK_DIR="$WORK/gomod"
  mkdir -p "$GOWORK_DIR"

  # Use the chain's own go.mod directly (preserves replace directives for forks)
  cp "$GO_MOD_DIR/go.mod" "$GOWORK_DIR/go.mod"
  cp "$GO_MOD_DIR/go.sum" "$GOWORK_DIR/go.sum" 2>/dev/null || true

  # Strip replace directives that point to local paths (won't resolve outside the repo)
  # Handles both inline form:  replace foo => ../bar
  # and block form:            replace ( \n foo => ../bar \n )
  python3 - "$GOWORK_DIR/go.mod" << 'PYEOF'
import re, sys
gomod = sys.argv[1]
with open(gomod) as f:
    content = f.read()

# Remove block replace directives containing local paths
def strip_local_replaces(text):
    # Handle block form: replace ( ... )
    def fix_block(m):
        lines = m.group(1).split('\n')
        kept = [l for l in lines if not re.search(r'=>\s+\.\.?/', l)]
        if not any(l.strip() for l in kept):
            return ''  # remove entire block if all entries were local
        return 'replace (\n' + '\n'.join(kept) + '\n)'
    text = re.sub(r'replace\s*\((.*?)\)', fix_block, text, flags=re.DOTALL)
    # Handle inline form: replace foo => ../bar
    text = re.sub(r'replace\s+\S+\s+=>\s+\.\.?/\S+', '', text)
    return text

content = strip_local_replaces(content)
with open(gomod, 'w') as f:
    f.write(content)
PYEOF

  cd "$GOWORK_DIR"
  go mod download all 2>/dev/null || warn "go mod download had errors (continuing)"

  # List ALL resolved modules with their disk locations
  go list -m -json all 2>/dev/null > "$WORK/modules.json" || true
  cd "$REPO_ROOT"

  # Parse concatenated JSON objects and scan each module for protos
  info "Scanning all dependencies for proto files..."
  SDK_VERSION="" IBC_VERSION="" COMETBFT_VERSION="" WASMD_VERSION=""
  DEP_COUNT=0

  # Use python3 to parse the concatenated JSON and emit tab-separated records
  while IFS=$'\t' read -r mod_path mod_ver mod_dir; do
    [ -z "$mod_dir" ] && continue
    [ ! -d "$mod_dir" ] && continue

    # Check if this module has proto files
    if [ -d "$mod_dir/proto" ]; then
      PROTO_IN_DEP=$(count_protos "$mod_dir/proto")
      if [ "$PROTO_IN_DEP" -gt 0 ]; then
        info "  $mod_path@$mod_ver ($PROTO_IN_DEP protos)"
        copy_protos "$mod_dir/proto" "$OUT/protos"
        DEP_COUNT=$((DEP_COUNT + 1))
      fi
    fi

    # Also grab third_party protos from deps
    if [ -d "$mod_dir/third_party/proto" ]; then
      copy_protos "$mod_dir/third_party/proto" "$OUT/protos"
    fi

    # Scan additional directories (e.g., ics23 stores protos in go/)
    for subdir in go types; do
      if [ -d "$mod_dir/$subdir" ]; then
        PROTO_IN_SUB=$(count_protos "$mod_dir/$subdir")
        if [ "$PROTO_IN_SUB" -gt 0 ]; then
          info "  $mod_path@$mod_ver ($PROTO_IN_SUB protos in $subdir/)"
          copy_protos "$mod_dir/$subdir" "$OUT/protos"
        fi
      fi
    done

    # Track key dependency versions for the manifest
    case "$mod_path" in
      *cosmos/cosmos-sdk*) SDK_VERSION="$mod_ver" ;;
      *cosmos/ibc-go*)     IBC_VERSION="$mod_ver" ;;
      *cometbft/cometbft*) COMETBFT_VERSION="$mod_ver" ;;
      *CosmWasm/wasmd*)    WASMD_VERSION="$mod_ver" ;;
    esac
  done < <(python3 - "$WORK/modules.json" << 'PYEOF'
import json, sys

modfile = sys.argv[1]
with open(modfile) as f:
    content = f.read()

if not content.strip():
    sys.exit(0)

decoder = json.JSONDecoder()
pos = 0
n = len(content)
while pos < n:
    # skip whitespace
    while pos < n and content[pos] in ' \t\n\r':
        pos += 1
    if pos >= n:
        break
    try:
        obj, end_pos = decoder.raw_decode(content, pos)
        path = obj.get('Path', '')
        version = obj.get('Version', '')
        d = obj.get('Dir', '')
        if path and d:
            print(f"{path}\t{version}\t{d}")
        pos = end_pos
    except json.JSONDecodeError:
        break
PYEOF
)

  info "Found protos in $DEP_COUNT dependencies"

  # --- Fallback: clone missing deps from proto_module_patterns ---
  # Some modules (like ics23) store protos outside the Go module path, so
  # go list can resolve them but the module cache won't contain protos.
  # For each pattern in chains.json, check if it contributed protos already.
  # If not (or if go list failed entirely), clone the repo and copy protos.
  CHAINS_JSON="$PROTO_REGISTRY_DIR/config/chains.json"
  ORIGINAL_GOMOD="$GO_MOD_DIR/go.mod"  # Original go.mod (before local-replace stripping)

  if [ -f "$CHAINS_JSON" ] && [ -f "$ORIGINAL_GOMOD" ]; then
    # Collect which module paths contributed protos in the main loop
    FOUND_MODS="$SDK_VERSION:cosmos-sdk $IBC_VERSION:ibc-go $COMETBFT_VERSION:cometbft $WASMD_VERSION:wasmd"

    # Read proto_module_patterns from chains.json
    PATTERNS=$(python3 -c "
import json
with open('$CHAINS_JSON') as f:
    data = json.load(f)
for p in data.get('proto_module_patterns', []):
    print(p)
")

    # Parse the ORIGINAL go.mod (respects replace directives like osmosis forks)
    GOMOD_DEPS=$(parse_gomod "$ORIGINAL_GOMOD")

    FALLBACK_DIR="$WORK/fallback_deps"
    mkdir -p "$FALLBACK_DIR"
    FALLBACK_COUNT=0

    for pattern in $PATTERNS; do
      # Find matching module in parsed go.mod output
      MATCH=$(echo "$GOMOD_DEPS" | grep "$pattern" | head -1 || true)
      [ -z "$MATCH" ] && continue

      MOD=$(echo "$MATCH" | cut -f1)
      VER=$(echo "$MATCH" | cut -f2)
      ACTUAL=$(echo "$MATCH" | cut -f3)

      # Check if this pattern's protos are already present.
      # For tracked deps (sdk, ibc, etc.) check version vars.
      # For others (ics23, gogoproto, etc.) we always try the fallback
      # since the Go module cache might not contain their protos.
      ALREADY_FOUND=false
      case "$MOD" in
        *cosmos/cosmos-sdk*) [ -n "$SDK_VERSION" ] && [ "$SDK_VERSION" != "unknown" ] && ALREADY_FOUND=true ;;
        *cosmos/ibc-go*)     [ -n "$IBC_VERSION" ] && [ "$IBC_VERSION" != "unknown" ] && ALREADY_FOUND=true ;;
        *cometbft/cometbft*) [ -n "$COMETBFT_VERSION" ] && [ "$COMETBFT_VERSION" != "unknown" ] && ALREADY_FOUND=true ;;
        *CosmWasm/wasmd*)    [ -n "$WASMD_VERSION" ] && [ "$WASMD_VERSION" != "unknown" ] && ALREADY_FOUND=true ;;
      esac
      [ "$ALREADY_FOUND" = true ] && continue

      # Convert Go module path to GitHub URL
      # e.g., github.com/osmosis-labs/cosmos-sdk -> https://github.com/osmosis-labs/cosmos-sdk
      GH_URL=""
      if echo "$ACTUAL" | grep -q "^github.com/"; then
        GH_OWNER_REPO=$(echo "$ACTUAL" | sed 's|github.com/||' | cut -d'/' -f1-2)
        GH_URL="https://github.com/$GH_OWNER_REPO"
      fi
      [ -z "$GH_URL" ] && continue

      CLONE_DIR="$FALLBACK_DIR/$(echo "$ACTUAL" | tr '/' '_')"
      info "  Fallback: cloning $ACTUAL@$VER..."

      # For Go submodules (e.g., github.com/cosmos/ics23/go), the tag format is
      # <subdir>/<version> (e.g., go/v0.11.0). Detect the subdir prefix.
      SUBMOD_PREFIX=""
      ACTUAL_NO_GH=$(echo "$ACTUAL" | sed 's|github.com/||')
      ACTUAL_PARTS=$(echo "$ACTUAL_NO_GH" | tr '/' '\n' | wc -l | tr -d ' ')
      if [ "$ACTUAL_PARTS" -gt 2 ]; then
        # Extra path components after owner/repo are the submodule dir
        SUBMOD_PREFIX=$(echo "$ACTUAL_NO_GH" | cut -d'/' -f3-)
      fi

      # Try multiple tag formats for the version
      CLONED=false
      TAGS_TO_TRY="$VER v$VER"
      if [ -n "$SUBMOD_PREFIX" ]; then
        TAGS_TO_TRY="$SUBMOD_PREFIX/$VER $SUBMOD_PREFIX/v$VER $TAGS_TO_TRY"
      fi
      for tag in $TAGS_TO_TRY; do
        if git clone --depth 1 --branch "$tag" "$GH_URL" "$CLONE_DIR" 2>/dev/null; then
          CLONED=true
          break
        fi
        rm -rf "$CLONE_DIR" 2>/dev/null || true
      done

      # For pseudo-versions (e.g., v0.50.12-osmosis-v31), try the full string
      if [ "$CLONED" = false ] && echo "$VER" | grep -qE '^v[0-9]+\.[0-9]+\.[0-9]+-'; then
        if git clone --depth 1 --branch "$VER" "$GH_URL" "$CLONE_DIR" 2>/dev/null; then
          CLONED=true
        else
          rm -rf "$CLONE_DIR" 2>/dev/null || true
        fi
      fi

      # Last resort: try full clone + checkout
      if [ "$CLONED" = false ]; then
        if git clone "$GH_URL" "$CLONE_DIR" 2>/dev/null; then
          if (cd "$CLONE_DIR" && git checkout "$VER" 2>/dev/null); then
            CLONED=true
          else
            rm -rf "$CLONE_DIR"
          fi
        fi
      fi

      if [ "$CLONED" = true ] && [ -d "$CLONE_DIR" ]; then
        FB_COUNT=0
        for subdir in proto third_party/proto go types; do
          if [ -d "$CLONE_DIR/$subdir" ]; then
            SUB_COUNT=$(count_protos "$CLONE_DIR/$subdir")
            if [ "$SUB_COUNT" -gt 0 ]; then
              info "    $ACTUAL: $SUB_COUNT protos in $subdir/"
              copy_protos "$CLONE_DIR/$subdir" "$OUT/protos"
              FB_COUNT=$((FB_COUNT + SUB_COUNT))
            fi
          fi
        done
        if [ "$FB_COUNT" -gt 0 ]; then
          FALLBACK_COUNT=$((FALLBACK_COUNT + 1))
          DEP_COUNT=$((DEP_COUNT + 1))
        fi

        # Track versions
        case "$MOD" in
          *cosmos/cosmos-sdk*) SDK_VERSION="$VER" ;;
          *cosmos/ibc-go*)     IBC_VERSION="$VER" ;;
          *cometbft/cometbft*) COMETBFT_VERSION="$VER" ;;
          *CosmWasm/wasmd*)    WASMD_VERSION="$VER" ;;
        esac
      else
        warn "  Failed to clone $ACTUAL@$VER"
      fi
    done

    if [ "$FALLBACK_COUNT" -gt 0 ]; then
      info "Fallback fetched protos from $FALLBACK_COUNT additional dependencies"
    fi
  fi

  DEPS_JSON=$(cat <<EOF
    "cosmos-sdk": "${SDK_VERSION:-unknown}",
    "ibc-go": "${IBC_VERSION:-unknown}",
    "cometbft": "${COMETBFT_VERSION:-unknown}",
    "wasmd": "${WASMD_VERSION:-unknown}"
EOF
)
fi

# --- Step 5: Overlay committed third-party protos ---
THIRD_PARTY="$PROTO_REGISTRY_DIR/third-party"
if [ -d "$THIRD_PARTY" ]; then
  info "Overlaying committed third-party protos..."
  copy_protos "$THIRD_PARTY" "$OUT/protos"
fi

# --- Step 6: Write manifest ---
PROTO_COUNT=$(count_protos "$OUT/protos")
info "Total proto files collected: $PROTO_COUNT"

if [ "$PROTO_COUNT" -eq 0 ]; then
  warn "$CHAIN@$VERSION has 0 proto files"
fi

cat > "$OUT/manifest.json" <<EOF
{
  "chain": "$CHAIN",
  "version": "$VERSION",
  "git_repo": "$GIT_REPO",
  "git_commit": "$GIT_COMMIT",
  "go_module": "${MOD_PATH:-unknown}",
  "fetch_method": "$FETCH_METHOD",
  "proto_files": $PROTO_COUNT,
  "dependencies": {
${DEPS_JSON:-    "note": "no go module resolution"}
  },
  "created_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF

info "Fetch complete: $OUT ($PROTO_COUNT proto files)"
