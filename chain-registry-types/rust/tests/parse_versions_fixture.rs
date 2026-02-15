use chain_registry_interface::Versions;

#[test]
fn parse_versions_fixture() {
    let json = r#"{
        "$schema": "../versions.schema.json",
        "chain_name": "cosmoshub",
        "versions": [
          { "name": "v1" }
        ]
      }"#;

    let parsed: Versions = serde_json::from_str(json).expect("parse versions");
    assert_eq!(parsed.chain_name, "cosmoshub");
    assert!(!parsed.versions.is_empty());
}
