#!/usr/bin/env bash
set -euo pipefail

# Complete Core Stack TypeScript Generator (CosmJS-Types Style)
# Builds proto bundles with latest tags and generates TypeScript bindings

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUNDLES_DIR="../proto-bundles-ts-core-latest"
SRC_DIR="./src"

echo "Building complete core Cosmos stack TypeScript bindings (cosmjs-types style)..."

# Step 1: Build the proto bundles with latest tags
echo "Step 1: Building proto bundles with latest tags..."
make proto-core-latest-ts

# Step 2: Check if bundles directory exists
if [ ! -d "$BUNDLES_DIR" ]; then
  echo "ERROR: Bundles directory $BUNDLES_DIR does not exist"
  exit 1
fi

# Step 3: Create source directory
mkdir -p "$SRC_DIR"

# Step 4: Install telescope if not available
if ! command -v npx &>/dev/null || ! npx @cosmology/telescope --help &>/dev/null; then
  echo "Installing telescope..."
  npm install --save-dev @cosmology/telescope
fi

# Step 5: Process each bundle and generate TypeScript bindings
echo "Step 2: Generating TypeScript bindings from proto bundles..."
for bundle_dir in "$BUNDLES_DIR"/*/; do
  if [ -d "$bundle_dir" ] && [ -d "$bundle_dir/proto" ]; then
    bundle_name=$(basename "$bundle_dir")
    echo "Processing bundle: $bundle_name"

    # Create a temporary directory for this bundle's generated code
    temp_dir=$(mktemp -d)

    # Run telescope to generate TypeScript bindings for this bundle
    echo "  Generating TypeScript bindings..."
    npx @cosmology/telescope generate --proto_dirs="$bundle_dir/proto" --out="$temp_dir"

    # Copy the generated code to the appropriate location in src/
    # We'll organize by module name (e.g., github-com-cosmos-cosmos-sdk-v0-50-9 becomes cosmos-sdk)

    # More accurate module name extraction
    if [[ $bundle_name == *"cosmos-sdk"* ]]; then
      module_name="cosmos"
    elif [[ $bundle_name == *"ibc-go"* ]]; then
      module_name="ibc"
    elif [[ $bundle_name == *"cometbft"* ]]; then
      module_name="tendermint"  # Following cosmjs-types convention
    elif [[ $bundle_name == *"wasmd"* ]]; then
      module_name="cosmwasm"
    else
      # Extract module name from bundle name (e.g., github-com-cosmos-cosmos-sdk-v0-50-9 -> cosmos)
      module_name=$(echo "$bundle_name" | sed -E 's/.*-([^-]+)-v[0-9]+-[0-9]+-[0-9]+.*/\1/')
      # Fallback if the above doesn't work
      if [ "$module_name" = "$bundle_name" ]; then
        module_name=$(echo "$bundle_name" | sed -E 's/(-v[0-9]+-[0-9]+-[0-9]+.*)?$//' | sed 's/.*-//')
      fi
    fi

    output_module_dir="$SRC_DIR/$module_name"
    mkdir -p "$output_module_dir"

    # Copy generated files to the module directory
    cp -r "$temp_dir"/* "$output_module_dir/" 2>/dev/null || true

    # Clean up temp directory
    rm -rf "$temp_dir"

    echo "  Generated bindings for $module_name in $output_module_dir"
  else
    echo "Skipping non-bundle directory: $bundle_dir"
  fi
done

echo ""
echo "TypeScript bindings generated successfully!"
echo "Sources are in: $SRC_DIR/"
echo ""
echo "To build the package:"
echo "  npm run build"
echo ""
echo "The generated bindings follow the cosmjs-types structure with:"
echo "- Modular organization by package (cosmos, ibc, tendermint, cosmwasm)"
echo "- TypeScript interfaces matching the proto definitions"
echo "- Proper imports and dependencies handled"