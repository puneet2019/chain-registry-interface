#[tokio::test]
async fn fetch_memo_keys_live_optional() {
    if std::env::var("CHAIN_REGISTRY_LIVE").ok().as_deref() != Some("1") {
        eprintln!("skipping live network test; set CHAIN_REGISTRY_LIVE=1 to enable");
        return;
    }
    let m = chain_registry_interface::fetch_memo_keys("unused")
        .await
        .expect("fetch memo_keys");
    assert!(!m.memo_keys.is_empty());
}