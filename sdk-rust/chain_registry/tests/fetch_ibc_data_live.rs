#[tokio::test]
async fn fetch_ibc_connection_live_optional() {
    if std::env::var("CHAIN_REGISTRY_LIVE").ok().as_deref() != Some("1") {
        eprintln!("skipping live network test; set CHAIN_REGISTRY_LIVE=1 to enable");
        return;
    }
    let d = chain_registry_interface::fetch_ibc_connection("agoric", "cosmoshub")
        .await
        .expect("fetch agoric-cosmoshub ibc connection");
    assert_eq!(d.chain_1.chain_name, "agoric");
    assert_eq!(d.chain_2.chain_name, "cosmoshub");
    assert!(!d.channels.is_empty());
}