use chain_registry_interface::IbcData;

#[test]
fn parse_ibc_data_fixture() {
    let json = r#"{
        "$schema": "../ibc_data.schema.json",
        "chain_1": {"chain_name": "cosmoshub", "chain_id": "cosmoshub-4", "client_id": "07-tendermint-0", "connection_id": "connection-0"},
        "chain_2": {"chain_name": "osmosis",   "chain_id": "osmosis-1",   "client_id": "07-tendermint-1", "connection_id": "connection-1"},
        "channels": [
          {
            "chain_1": {"channel_id": "channel-141", "port_id": "transfer"},
            "chain_2": {"channel_id": "channel-0",   "port_id": "transfer"},
            "ordering": "unordered",
            "version": "ics20-1"
          }
        ]
      }"#;

    let parsed: IbcData = serde_json::from_str(json).expect("parse ibc_data");
    assert!(!parsed.channels.is_empty());
    assert_eq!(parsed.chain_1.chain_name, "cosmoshub");
    assert_eq!(parsed.chain_2.chain_name, "osmosis");
}