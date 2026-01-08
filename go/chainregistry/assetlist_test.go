package chainregistry

import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"
	"testing"
	"time"
)

func TestAssetList_ParseFixture(t *testing.T) {
	path := filepath.Join("testdata", "osmosis_assetlist.json")
	b, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("failed to read fixture: %v", err)
	}
	var a AssetList
	if err := json.Unmarshal(b, &a); err != nil {
		t.Fatalf("failed to unmarshal assetlist: %v", err)
	}
	if a.ChainName != "osmosis" {
		t.Fatalf("unexpected chain_name: %q", a.ChainName)
	}
	if len(a.Assets) == 0 {
		t.Fatalf("expected at least one asset")
	}
}

func TestFetchAssetList_Live(t *testing.T) {
	if os.Getenv("CHAIN_REGISTRY_LIVE") != "1" {
		t.Skip("skipping live network test; set CHAIN_REGISTRY_LIVE=1 to enable")
	}
	ctx, cancel := WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	al, err := FetchAssetList(ctx, "osmosis")
	if err != nil {
		t.Fatalf("FetchAssetList error: %v", err)
	}
	if al == nil || al.ChainName != "osmosis" || len(al.Assets) == 0 {
		t.Fatalf("unexpected response: %#v", al)
	}
}
