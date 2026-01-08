package chainregistry

import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"
	"testing"
	"time"
)

func TestMemoKeys_ParseFixture(t *testing.T) {
	path := filepath.Join("testdata", "memo_keys_min.json")
	b, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("failed to read fixture: %v", err)
	}
	var m MemoKeys
	if err := json.Unmarshal(b, &m); err != nil {
		t.Fatalf("failed to unmarshal memo keys: %v", err)
	}
	if len(m.MemoKeys) == 0 {
		t.Fatalf("expected at least one memo key")
	}
	if m.MemoKeys[0].Key == "" || m.MemoKeys[0].GitRepo == "" {
		t.Fatalf("unexpected data: %#v", m.MemoKeys[0])
	}
}

func TestFetchMemoKeys_Live(t *testing.T) {
	if os.Getenv("CHAIN_REGISTRY_LIVE") != "1" {
		t.Skip("skipping live network test; set CHAIN_REGISTRY_LIVE=1 to enable")
	}
	ctx, cancel := WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	m, err := FetchMemoKeys(ctx, "unused")
	if err != nil {
		t.Fatalf("FetchMemoKeys error: %v", err)
	}
	if m == nil || len(m.MemoKeys) == 0 {
		t.Fatalf("unexpected response: %#v", m)
	}
}
