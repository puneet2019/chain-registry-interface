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
      chainregistry "github.com/puneet2019/chain-registry-interface/chain-registry-types/go"
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
  - make proto-core             # builds core stack bundles into proto-bundles/
  - make proto-core-go          # builds core stack bundles with Go codegen
  - make proto-core-latest      # builds core stack with latest relevant tags
  - make proto-core-latest-ts   # builds core stack with latest tags and TS generation
  - make proto-core-ts          # builds core stack TypeScript bindings (cosmjs-types style)
  - make sdk-ts-build           # builds core stack TypeScript SDK (cosmjs-types style) with latest tags
  - make sdk-ts-test            # builds and tests the TypeScript SDK
  - make proto-all-chains       # builds all chains bundles into proto-bundles-all/
  - make proto-all-chains-go    # builds all chains bundles with Go codegen
  - make proto-clean            # removes all proto-bundles/
- Direct script usage:
  - proto-tools/proto-registry-cli.sh build-bundle \
      github.com/cometbft/cometbft@v0.38.12 \
      github.com/cosmos/cosmos-sdk@v0.50.9 \
      github.com/cosmos/ibc-go/v8@v8.4.0 \
      github.com/CosmWasm/wasmd@v0.50.0
- Env options:
  - OUT_DIR=proto-bundles GEN_GO=1 GEN_TS=0 GEN_RUST=0 proto-tools/proto-registry-cli.sh build-bundle <modules>
- Output:
  - One directory per module@version under proto-bundles/, containing copied proto trees and a manifest.json.
- TypeScript (Telescope) manual helper:
  - Install generator: cd protos-ts && npm i
  - Run for a bundle: node protos-ts/telescope-from-bundle.cjs proto-bundles/<bundle-dir>
  - Output will be written into <bundle>/_bindings/ts
- TypeScript SDK (CosmJS-Types Style):
  - Builds TypeScript bindings for the core Cosmos stack with latest tags
  - Modular organization by package (cosmos, ibc, tendermint, cosmwasm)
  - TypeScript interfaces matching the proto definitions
  - Proper imports and dependencies handled
  - Usage: make sdk-ts-build

Proto files fetcher (latest core stack)
- Fetch latest proto files for the core Cosmos stack: cometbft, cosmos-sdk, ibc-go, wasmd.
- Requirements: curl and tar installed.
- Make targets:
  - make fetch-proto-core-latest  # downloads latest proto files to proto/ directory
  - make clean-proto              # removes proto/ directory
- Direct script usage:
  - bash fetch-proto-files.sh
- Output:
  - Proto files organized by module in the proto/ directory (214 proto files total)
  - Uses latest relevant tags automatically determined from GitHub

Upstream protos (direct from upstream repos)
- Fetch raw proto sources from upstream repos/tags; output to protos/upstream/<repo>-<tag>
- Make targets:
  - make fetch-upstream-protos-core
  - MODULES="github.com/cosmos/cosmos-sdk@v0.50.9 github.com/cosmos/ibc-go@v8.4.0" make fetch-upstream-protos
- Direct script usage:
  - proto-tools/proto-registry-cli.sh fetch-upstream core
  - proto-tools/proto-registry-cli.sh fetch-upstream fetch <repo>@<tag> [more...]
- Notes:
  - Uses buf export when available, else copies proto/ and third_party/proto/
  - Strictly read-only: no edits are applied to upstream files

Live tests (optional)
- Tests default to offline fixtures. To enable network tests, set CHAIN_REGISTRY_LIVE=1.
  - Example: CHAIN_REGISTRY_LIVE=1 make ci-go

Development
- Local planning: docs/PLAN.md is local-only and ignored via .gitignore (do not commit it). Keep it until project completion.
- CI: GitHub Actions are configured for Go and Rust builds/tests in .github/workflows.
- To refresh schemas for reference:
  - bash scripts/fetch-schemas.sh
- Proto registry plan: docs/PROTO_REGISTRY_PLAN.md
- Research notes on codegen stacks (cosmjs-types and cosmos-rust): docs/RESEARCH_CODEGEN.md
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
  - Update version in chain-registry-types/rust/Cargo.toml.
  - Run: make ci-rust (build + tests) and ensure README has usage.
  - Optional: cargo publish --dry-run in chain-registry-types/rust
- Publish:
  - cd chain-registry-types/rust && cargo publish
- Notes:
  - Only bump versions when schemas change (per this repo’s policy).
  - Use yanked releases for quick rollbacks if necessary.
