use chain_registry_interface::Chain;

#[test]
fn parse_chain_fixture() {
    let json = r#"{
        "$schema": "../chain.schema.json",
        "chain_name": "cosmoshub",
        "chain_type": "cosmos",
        "status": "live"
    }"#;

    let parsed: Chain = serde_json::from_str(json).expect("parse chain");
    assert_eq!(parsed.chain_name, "cosmoshub");
    assert_eq!(parsed.chain_type, "cosmos");
    assert_eq!(parsed.status, "live");
}