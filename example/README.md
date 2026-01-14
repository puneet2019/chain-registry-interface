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

The Go example uses a local replace directive in `go.mod` because Go's module system has specific requirements for publishing modules in subdirectories. For a module located at `github.com/user/repo/subdir`, the tag should be published at the root of the repository (e.g., `v0.0.1-alpha1`) rather than with the subdirectory path included. This is a standard Go module publication pattern for monorepos with multiple modules.

For production use, the Go module would need to be published with the correct tag structure at the repository root level.