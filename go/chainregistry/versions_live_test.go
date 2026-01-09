package chainregistry

import (
	"context"
	"os"
	"testing"
	"time"
)

func TestFetchVersions_Live(t *testing.T) {
	if os.Getenv("CHAIN_REGISTRY_LIVE") != "1" {
		t.Skip("skipping live network test; set CHAIN_REGISTRY_LIVE=1 to enable")
	}
	ctx, cancel := WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	v, err := FetchVersions(ctx, "cosmoshub")
	if err != nil {
		t.Fatalf("FetchVersions error: %v", err)
	}
	if v == nil || v.ChainName != "cosmoshub" {
		t.Fatalf("unexpected response: %#v", v)
	}
}
