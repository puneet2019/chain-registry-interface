use chain_registry::AssetList;

#[test]
fn parse_assetlist_fixture() {
    let json = r#"{
        "$schema": "../assetlist.schema.json",
        "chain_name": "osmosis",
        "assets": [
          {
            "denom_units": [
              {"denom": "uosmo", "exponent": 0},
              {"denom": "osmo", "exponent": 6}
            ],
            "type_asset": "sdk.coin",
            "base": "uosmo",
            "display": "osmo",
            "name": "Osmosis",
            "symbol": "OSMO"
          }
        ]
      }"#;

    let parsed: AssetList = serde_json::from_str(json).expect("parse assetlist");
    assert_eq!(parsed.chain_name, "osmosis");
    assert!(!parsed.assets.is_empty());
}
