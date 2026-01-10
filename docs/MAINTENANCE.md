Maintenance Playbook — chain-registry-interface

This document describes how to keep the Go and Rust runtime SDKs aligned with the upstream cosmos/chain-registry.

Key principles
- Schemas are authoritative. Do not embed registry JSON in the libraries.
- Optional fields: Go pointers / Rust Option<T>.
- Open-ended objects: Go map[string]any / Rust HashMap<String, serde_json::Value>.
- Version bumps only for schema changes, not for data changes.

When schemas change
1) Sync local schema copies for reference
   - bash scripts/fetch-schemas.sh
2) Inspect diffs and update types accordingly
   - Go: add missing fields to structs; keep json tags exact; use pointers for optionals.
   - Rust: add missing fields; use #[serde(rename = "...")] and Option<T> for optionals.
3) Update tests
   - Add/adjust fixtures to cover new fields minimally.
   - Keep live network tests optional via CHAIN_REGISTRY_LIVE=1.
4) Build and run tests
   - make ci-go
   - make ci-rust
   - make ci-ts
5) Versioning & release
   - Determine version impact:
     - Backward-compatible additions → minor bump (0.y.z → 0.(y+1).0).
     - Breaking changes (renames/removals/incompatible types) → major bump.
     - Fixes/maintenance with no schema change → patch bump.
   - Tag and publish crates/modules as appropriate.

Runtime helpers rules
- Fetch via raw.githubusercontent.com only.
- No caching, no retries in-library; callers manage timeouts via context (Go) or their runtime (Rust).
- No extra validation beyond JSON parsing.

Testing guidance
- Prefer small, representative fixtures under go/.../testdata and rust/.../tests or inline.
- Network flakiness: keep live tests behind CHAIN_REGISTRY_LIVE, and keep them fast.

Adding new helpers
- Keep signatures aligned with README and issue:
  - Go: FetchChain(ctx, name), FetchAssetList(ctx, name), FetchMemoKeys(ctx, name), FetchVersions(ctx, name)
  - Rust: async fetch_chain(name), fetch_asset_list(name), fetch_memo_keys(name), fetch_versions(name)
  - Note: The registry does not provide an aggregate ibc/ibc-data.json; per-connection files live under _IBC/<a>-<b>.json. Add per-connection helpers separately if needed.
- Keep dependencies minimal (std + net/http + encoding/json for Go; reqwest+serde for Rust).

Checklist for PRs
- [ ] Types updated per schema changes (Go + Rust).
- [ ] New/changed fields have tests (fixture parse ok).
- [ ] CI green (make ci-go && make ci-rust && make ci-ts).
- [ ] README and MAINTENANCE updated if necessary.
- [ ] No embedded registry JSON in libraries (fixtures only in tests).


Release and publishing guide

Go (module tagging only)
- This repo does not publish a Go module to a registry; we use Git tags for versioning.
- Steps:
  1. Bump version references in README if needed.
  2. Ensure main is green: make ci-go
  3. Tag and push: VERSION=x.y.z make tag-go

Rust (crates.io)
- One-time setup:
  1. Create/verify your crates.io account (https://crates.io/), enable 2FA (recommended).
  2. Generate an API token at https://crates.io/me.
  3. On your machine: cargo login <YOUR_TOKEN>
- Per-release steps:
  1. Update version in rust/chain_registry/Cargo.toml.
  2. Verify build/tests: make ci-rust
  3. Optional dry run: (cd rust/chain_registry && cargo publish --dry-run)
  4. Tag and publish:
     - VERSION=x.y.z make release-rust
     - This creates git tag rust-sdk/vx.y.z and runs cargo publish in rust/chain_registry.

TypeScript (npm registry)
- One-time setup:
  1. Create/verify your npm account (https://www.npmjs.com/), enable 2FA (recommended).
  2. Login locally: npm login (ensure you have access to the @chain-registry-interface scope or publish as public).
  3. If using tokens/CI, set NPM_TOKEN and run npm config set //registry.npmjs.org/:_authToken "$NPM_TOKEN"
- Per-release steps:
  1. Update version in ts/package.json.
  2. Verify build/tests: make ci-ts
  3. Tag and publish:
     - VERSION=x.y.z make release-ts
     - This creates git tag ts-sdk/vx.y.z and runs npm publish --access public in ts/

Notes
- Keep releases atomic and small. Prefer separate tags per SDK.
- If a publish fails after tag push, you can retry publish-rust or publish-ts without re-tagging.
- Use yanked releases (crates.io) or npm deprecate to handle mistakes.
