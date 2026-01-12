#[tokio::test]
async fn fetch_versions_live_optional() {
    if std::env::var("CHAIN_REGISTRY_LIVE").ok().as_deref() != Some("1") {
        eprintln!("skipping live network test; set CHAIN_REGISTRY_LIVE=1 to enable");
        return;
    }
    let v = chain_registry_interface::fetch_versions("cosmoshub")
        .await
        .expect("fetch cosmoshub versions");
    assert_eq!(v.chain_name, "cosmoshub");
    assert!(!v.versions.is_empty());
}
