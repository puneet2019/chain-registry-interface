#[tokio::test]
async fn fetch_ibc_data_live_optional() {
    if std::env::var("CHAIN_REGISTRY_LIVE").ok().as_deref() != Some("1") {
        eprintln!("skipping live network test; set CHAIN_REGISTRY_LIVE=1 to enable");
        return;
    }
    let d = chain_registry::fetch_ibc_data("unused")
        .await
        .expect("fetch ibc-data");
    assert!(!d.channels.is_empty());
}