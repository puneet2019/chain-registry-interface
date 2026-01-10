# chain-registry-interface (Rust)

Typed runtime access to the Cosmos chain-registry at runtime. This crate mirrors the official JSON schemas (no embedded data) and provides minimal helpers to fetch JSON from GitHub.

Key points:
- Types match schema fields exactly (serde rename where needed).
- Optional fields use Option<T>.
- No caching or validation beyond JSON parsing.

Install (after publish):

```toml
[dependencies]
chain-registry-interface = "0.0.1"
```

Example

```rust
use chain_registry_interface::fetch_chain;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let chain = fetch_chain("osmosis").await?;
    println!("{}", chain.chain_name);
    Ok(())
}
```

Helpers
- fetch_chain(name) -> Chain
- fetch_asset_list(name) -> AssetList
- fetch_memo_keys(_) -> MemoKeys
- fetch_versions(name) -> Versions
- fetch_ibc_connection(a, b) -> IbcData from _IBC/<a>-<b>.json

License: Apache-2.0 OR MIT
Repository: https://github.com/puneet2019/chain-registry-interface
