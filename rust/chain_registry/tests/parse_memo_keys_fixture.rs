use chain_registry_interface::MemoKeys;

#[test]
fn parse_memo_keys_fixture() {
    let json = r#"{
        "$schema": "../memo_keys.schema.json",
        "memo_keys": [
          {
            "key": "relayer_memo",
            "description": "Test memo key",
            "git_repo": "https://github.com/example/repo",
            "memo": {"foo": "bar"}
          }
        ]
      }"#;

    let parsed: MemoKeys = serde_json::from_str(json).expect("parse memo_keys");
    assert!(!parsed.memo_keys.is_empty());
    let first = &parsed.memo_keys[0];
    assert_eq!(first.key, "relayer_memo");
    assert!(first.memo.contains_key("foo"));
}