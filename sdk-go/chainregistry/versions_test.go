package chainregistry

import (
	"encoding/json"
	"os"
	"path/filepath"
	"testing"
)

func TestVersions_ParseFixture(t *testing.T) {
	path := filepath.Join("testdata", "versions_min.json")
	b, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("failed to read fixture: %v", err)
	}
	var v Versions
	if err := json.Unmarshal(b, &v); err != nil {
		t.Fatalf("failed to unmarshal versions: %v", err)
	}
	if v.ChainName != "cosmoshub" {
		t.Fatalf("unexpected chain_name: %q", v.ChainName)
	}
	if len(v.Versions) == 0 || v.Versions[0].Name == "" {
		t.Fatalf("expected at least one version with name")
	}
}
