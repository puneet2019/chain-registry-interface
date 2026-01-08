package chainregistry

import (
	"encoding/json"
	"strings"
	"testing"
)

func strptr(s string) *string { return &s }
func boolptr(b bool) *bool { return &b }

// Test a full JSON round-trip for Chain covering all optional and nested fields.
func TestChain_JSONRoundTrip_AllFields(t *testing.T) {
	c := Chain{
		DollarSchema:     "../chain.schema.json",
		ChainName:        "osmosis",
		ChainType:        "cosmos",
		Status:           "live",
		ChainID:          strptr("osmosis-1"),
		PreForkChainName: strptr("osmosis_pre"),
		PrettyName:       strptr("Osmosis"),
		Website:          strptr("https://osmosis.zone"),
		NetworkType:      strptr("mainnet"),
		Bech32Prefix:     strptr("osmo"),
		Bech32Config: &Bech32Config{
			Bech32PrefixAccAddr:  strptr("osmo"),
			Bech32PrefixAccPub:   strptr("osmopub"),
			Bech32PrefixValAddr:  strptr("osmovaloper"),
			Bech32PrefixValPub:   strptr("osmovaloperpub"),
			Bech32PrefixConsAddr: strptr("osmovalcons"),
			Bech32PrefixConsPub:  strptr("osmovalconspub"),
		},
		LogoURIs: &LogoURIs{
			Png: strptr("https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png"),
			Svg: strptr("https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"),
		},
		Description: strptr("A test DEX chain"),
		Peers: &Peers{
			Seeds: []Peer{{ID: "id1", Address: "addr1", Provider: strptr("prov1")}},
			PersistentPeers: []Peer{{ID: "id2", Address: "addr2"}},
		},
		Apis: &Apis{
			RPC:            []Endpoint{{Address: "https://rpc.osmosis.zone", Provider: strptr("Osmosis"), Archive: boolptr(true)}},
			REST:           []Endpoint{{Address: "https://lcd.osmosis.zone"}},
			GRPC:           []Endpoint{{Address: "grpc.osmosis.zone:9090"}},
			WSS:            []Endpoint{{Address: "wss://ws.osmosis.zone"}},
			GRPCWeb:        []Endpoint{{Address: "https://grpc-web.osmosis.zone"}},
			EVMHTTPJSONRPC: []Endpoint{{Address: "https://jsonrpc.osmosis.zone"}},
		},
		Explorers: []Explorer{{
			Kind:          strptr("mintscan"),
			URL:           strptr("https://www.mintscan.io/osmosis"),
			TxPage:        strptr("https://www.mintscan.io/osmosis/txs/{txHash}"),
			AccountPage:   strptr("https://www.mintscan.io/osmosis/account/{account}"),
			ValidatorPage: strptr("https://www.mintscan.io/osmosis/validators/{operatorAddress}"),
			ProposalPage:  strptr("https://www.mintscan.io/osmosis/proposals/{id}"),
			BlockPage:     strptr("https://www.mintscan.io/osmosis/blocks/{height}"),
		}},
		Keywords:    []string{"dex", "ibc"},
		ExtraCodecs: []string{"ethermint"},
	}

	b, err := json.Marshal(&c)
	if err != nil {
		t.Fatalf("marshal: %v", err)
	}
	js := string(b)
	// Ensure JSON field names match exact schema names
	for _, want := range []string{
		"\"$schema\"",
		"\"chain_name\"",
		"\"chain_type\"",
		"\"status\"",
		"\"pre_fork_chain_name\"",
		"\"bech32_config\"",
		"\"logo_URIs\"",
		"\"peers\"",
		"\"apis\"",
		"\"grpc-web\"",
		"\"evm-http-jsonrpc\"",
		"\"explorers\"",
		"\"extra_codecs\"",
	} {
		if !strings.Contains(js, want) {
			t.Fatalf("expected JSON to contain %s; got: %s", want, js)
		}
	}

	var round Chain
	if err := json.Unmarshal(b, &round); err != nil {
		t.Fatalf("unmarshal: %v", err)
	}

	if round.ChainName != c.ChainName || round.ChainType != c.ChainType || round.Status != c.Status {
		t.Fatalf("core fields mismatch: %#v", round)
	}
	if round.Bech32Config == nil || round.Apis == nil || round.Peers == nil || round.LogoURIs == nil {
		t.Fatalf("expected nested optional structs to be present")
	}
	if len(round.Apis.RPC) != 1 || round.Apis.RPC[0].Archive == nil || !*round.Apis.RPC[0].Archive {
		t.Fatalf("expected rpc archive endpoint to round-trip")
	}
	if got := len(round.Explorers); got != 1 {
		t.Fatalf("expected 1 explorer, got %d", got)
	}
}

// Test that omitempty tags actually omit optional fields when unset.
func TestChain_MarshalOmitEmpty(t *testing.T) {
	c := Chain{
		DollarSchema: "../chain.schema.json",
		ChainName:    "cosmoshub",
		ChainType:    "cosmos",
		Status:       "live",
	}
	b, err := json.Marshal(&c)
	if err != nil {
		t.Fatalf("marshal: %v", err)
	}
	js := string(b)
	// Required fields present
	for _, want := range []string{"\"$schema\"", "\"chain_name\"", "\"chain_type\"", "\"status\""} {
		if !strings.Contains(js, want) {
			t.Fatalf("expected JSON to contain %s", want)
		}
	}
	// Optional fields omitted
	for _, notWant := range []string{
		"\"chain_id\"",
		"\"pre_fork_chain_name\"",
		"\"pretty_name\"",
		"\"website\"",
		"\"network_type\"",
		"\"bech32_prefix\"",
		"\"bech32_config\"",
		"\"logo_URIs\"",
		"\"peers\"",
		"\"apis\"",
		"\"explorers\"",
		"\"keywords\"",
		"\"extra_codecs\"",
	} {
		if strings.Contains(js, notWant) {
			t.Fatalf("expected JSON to omit %s; got: %s", notWant, js)
		}
	}
}
