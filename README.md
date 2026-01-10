# chain-registry-interface

Objective
- Create runtime SDKs in Go and Rust that expose typed access to the Cosmos chain-registry, covering all schemas and all JSON data, with helpers to fetch data directly from GitHub.

Current focus
- Start with a solid plan and type definitions (per official schemas). Helpers will come after types compile.

Status
- Makefile-based CI in place (Go and Rust via `make ci-go` / `make ci-rust`).
- Dev script to fetch latest schemas: scripts/fetch-schemas.sh (downloads into scripts/schemas/)
- Implementing types per schemas in small, verifiable steps (Go and Rust).
- Experimental proto registry tooling for core Cosmos stack (see below).

Guiding rules
- Schemas are the source of truth (no hand-wavy fields, no renaming, no merging).
- Optional fields: Go pointers / Rust Option<T>.
- Open-ended objects: Go map[string]any / Rust HashMap<String, serde_json::Value>.
- No caching or validation in runtime helpers (fetch + parse only).
- No embedding registry JSON in published libraries.

Usage examples
- Go
  - import (
      "context"
      chainregistry "github.com/puneet2019/chain-registry-interface/go/chainregistry"
    )
  - ctx := context.Background()
  - chain, _ := chainregistry.FetchChain(ctx, "cosmoshub")
  - fmt.Println(chain.ChainID)
  - assets, _ := chainregistry.FetchAssetList(ctx, "osmosis")
  - fmt.Println(len(assets.Assets))
- Rust
  - use chain_registry_interface::fetch_chain;
  - let chain = fetch_chain("osmosis").await?;
  - println!("{}", chain.chain_name);
- TypeScript
  - import { fetchChain, fetchAssetList } from "@puneet_m/chain-registry-interface";
  - const chain = await fetchChain("cosmoshub");
  - console.log(chain.chain_name);

Proto registry (experimental)
- Build immutable proto bundles for the core stack: cometbft, cosmos-sdk, ibc-go, wasmd.
- Requirements: Go toolchain installed. Optional: protoc and protoc-gen-go for Go bindings.
- Make targets:
  - make proto-core           # builds bundles into proto-bundles/
  - make proto-core-go        # builds bundles and attempts Go codegen
  - make proto-clean          # removes proto-bundles/
- Direct script usage:
  - scripts/proto-registry.sh build \
      github.com/cometbft/cometbft@v0.38.12 \
      github.com/cosmos/cosmos-sdk@v0.50.9 \
      github.com/cosmos/ibc-go/v8@v8.4.0 \
      github.com/CosmWasm/wasmd@v0.50.0
- Env options:
  - OUT_DIR=proto-bundles GEN_GO=1 GEN_TS=0 GEN_RUST=0 scripts/proto-registry.sh build <modules>
- Output:
  - One directory per module@version under proto-bundles/, containing copied proto trees and a manifest.json.

Live tests (optional)
- Tests default to offline fixtures. To enable network tests, set CHAIN_REGISTRY_LIVE=1.
  - Example: CHAIN_REGISTRY_LIVE=1 make ci-go

Development
- Local planning: docs/PLAN.md is local-only and ignored via .gitignore (do not commit it). Keep it until project completion.
- CI: GitHub Actions are configured for Go and Rust builds/tests in .github/workflows.
- To refresh schemas for reference:
  - bash scripts/fetch-schemas.sh
- Proto registry plan: docs/PROTO_REGISTRY_PLAN.md
- Maintenance playbook: see docs/MAINTENANCE.md

Versioning
- Version bumps only when schemas change (semver applies to type compatibility). Registry data updates alone do not require a release.

Publishing (Rust crates.io)
- Prereqs:
  - Create a crates.io account and verify your email.
  - Generate an API token at https://crates.io/me and save it locally.
- One-time auth on your machine:
  - Run: cargo login <YOUR_TOKEN>
- Sanity checks before publishing:
  - Update version in rust/chain_registry/Cargo.toml.
  - Run: make ci-rust (build + tests) and ensure README has usage.
  - Optional: cargo publish --dry-run in rust/chain_registry
- Publish:
  - cd rust/chain_registry && cargo publish
- Notes:
  - Only bump versions when schemas change (per this repo’s policy).
  - Use yanked releases for quick rollbacks if necessary.
