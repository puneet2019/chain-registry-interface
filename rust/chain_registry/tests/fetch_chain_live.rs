#[tokio::test]
async fn fetch_chain_live_optional() {
    if std::env::var("CHAIN_REGISTRY_LIVE").ok().as_deref() != Some("1") {
        eprintln!("skipping live network test; set CHAIN_REGISTRY_LIVE=1 to enable");
        return;
    }
    let chain = chain_registry_interface::fetch_chain("osmosis").await.expect("fetch osmosis");
    assert_eq!(chain.chain_name, "osmosis");
}
