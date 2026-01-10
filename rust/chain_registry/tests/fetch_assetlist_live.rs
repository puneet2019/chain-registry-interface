#[tokio::test]
async fn fetch_assetlist_live_optional() {
    if std::env::var("CHAIN_REGISTRY_LIVE").ok().as_deref() != Some("1") {
        eprintln!("skipping live network test; set CHAIN_REGISTRY_LIVE=1 to enable");
        return;
    }
    let al = chain_registry_interface::fetch_asset_list("osmosis")
        .await
        .expect("fetch osmosis assetlist");
    assert_eq!(al.chain_name, "osmosis");
    assert!(!al.assets.is_empty());
}