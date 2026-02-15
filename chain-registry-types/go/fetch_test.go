package chainregistry

import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"
	"testing"
	"time"
)

func TestChain_ParseFixture(t *testing.T) {
	path := filepath.Join("testdata", "cosmoshub_chain.json")
	b, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("failed to read fixture: %v", err)
	}
	var c Chain
	if err := json.Unmarshal(b, &c); err != nil {
		t.Fatalf("failed to unmarshal chain: %v", err)
	}
	if c.ChainName != "cosmoshub" {
		t.Fatalf("unexpected chain_name: %q", c.ChainName)
	}
}

func TestFetchChain_Live(t *testing.T) {
	if os.Getenv("CHAIN_REGISTRY_LIVE") != "1" {
		t.Skip("skipping live network test; set CHAIN_REGISTRY_LIVE=1 to enable")
	}
	ctx, cancel := WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	c, err := FetchChain(ctx, "cosmoshub")
	if err != nil {
		t.Fatalf("FetchChain error: %v", err)
	}
	if c == nil || c.ChainName != "cosmoshub" {
		t.Fatalf("unexpected response: %#v", c)
	}
}
