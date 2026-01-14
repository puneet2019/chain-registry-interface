# Chain Registry Interface - Fetch Chain Data Example

This example demonstrates how to use the chain-registry-interface package to fetch chain information from the Cosmos chain registry using JavaScript, TypeScript, Go, and Rust.

## Overview

The examples:
1. Fetch chain information (like chain ID, bech32 prefix, etc.) from the chain registry
2. Fetch asset list information for the selected chain
3. Display comprehensive chain data including metadata, assets, and API endpoints

## Files Included

- `fetch-chain-data.js` - JavaScript example to fetch chain registry data
- `fetch-chain-data.ts` - TypeScript example to fetch chain registry data
- `fetch-chain-data.go` - Go example to fetch chain registry data
- `fetch-chain-data.rs` - Rust example to fetch chain registry data
- `Cargo.toml` - Rust dependencies configuration
- `README.md` - This file
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration

## Prerequisites

Before running this example, you need to install the required dependencies:

```bash
npm install @puneet_m/chain-registry-interface
```

## Usage

### Using npm scripts:
```bash
# Install dependencies
npm install

# Run JavaScript example
npm run fetch:js

# Run TypeScript example
npm run fetch:ts
```

### Using Makefile:
```bash
# Install dependencies
make install-deps

# Run JavaScript example
make fetch-js

# Run TypeScript example
make fetch-ts

# Run Go example
make run-go

# Run Rust example
make run-rust
```

### Direct execution:
```bash
# JavaScript
node fetch-chain-data.js

# TypeScript (with ts-node)
npx ts-node fetch-chain-data.ts

# Go (with dependencies resolved)
go run fetch-chain-data.go

# Rust (with dependencies resolved)
cargo run --bin fetch-chain-data
```

## Dependencies

- `@puneet_m/chain-registry-interface`: Package to fetch chain information from the Cosmos chain registry

## Note about Go Module Publication

The Go example uses a local replace directive in `go.mod` because the currently published version has an incorrect tag structure. For Go modules in subdirectories to work properly, the repository should be tagged at the root level (e.g., `v0.0.1-alpha2`) rather than with the subdirectory path included.

### For Future Releases

To publish the Go module correctly for public consumption:

1. Tag the repository at the root level with a semantic version (e.g., `git tag v0.0.1-alpha2`)
2. Push the tag to the remote repository (e.g., `git push origin v0.0.1-alpha2`)
3. Users will then be able to import the module as:

```go
import "github.com/puneet2019/chain-registry-interface/sdk-go/chainregistry"
```

And reference it in their go.mod as:
```
require github.com/puneet2019/chain-registry-interface/sdk-go/chainregistry v0.0.1-alpha2
```

This is the standard Go module publication pattern for monorepos with modules in subdirectories.

For immediate production use with the current publication structure, the local replace directive approach shown in this example is the appropriate workaround.