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
  - Go: FetchChain(ctx, name), FetchAssetList(ctx, name), FetchIBCData(ctx, name), FetchMemoKeys(ctx, name), FetchVersions(ctx, name)
  - Rust: async fetch_chain(name), fetch_asset_list(name), fetch_ibc_data(name), fetch_memo_keys(name), fetch_versions(name)
- Keep dependencies minimal (std + net/http + encoding/json for Go; reqwest+serde for Rust).

Checklist for PRs
- [ ] Types updated per schema changes (Go + Rust).
- [ ] New/changed fields have tests (fixture parse ok).
- [ ] CI green (make ci-go && make ci-rust).
- [ ] README and MAINTENANCE updated if necessary.
- [ ] No embedded registry JSON in libraries (fixtures only in tests).
