#!/usr/bin/env bash
set -euo pipefail

# Dev-only helper to fetch the latest JSON Schemas from cosmos/chain-registry
# NOTE: Do NOT embed these schemas in the runtime libraries. They are for development/reference/tests only.

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SCHEMA_DIR="$ROOT_DIR/scripts/schemas"
BASE_URL="https://raw.githubusercontent.com/cosmos/chain-registry/master" 

mkdir -p "$SCHEMA_DIR"

files=(
  "chain.schema.json"
  "assetlist.schema.json"
  "ibc_data.schema.json"
  "memo_keys.schema.json"
  "versions.schema.json"
)

for f in "${files[@]}"; do
  echo "Downloading $f ..."
  curl -fsSL "$BASE_URL/$f" -o "$SCHEMA_DIR/$f"
  echo "Saved to $SCHEMA_DIR/$f"
done

echo "Done. Schemas downloaded to $SCHEMA_DIR"