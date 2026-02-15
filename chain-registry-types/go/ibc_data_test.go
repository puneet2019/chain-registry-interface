package chainregistry

import (
	"encoding/json"
	"os"
	"path/filepath"
	"testing"
)

func TestIBCData_ParseFixture(t *testing.T) {
	path := filepath.Join("testdata", "ibc_data_min.json")
	b, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("failed to read fixture: %v", err)
	}
	var d IBCData
	if err := json.Unmarshal(b, &d); err != nil {
		t.Fatalf("failed to unmarshal ibc data: %v", err)
	}
	if len(d.Channels) == 0 {
		t.Fatalf("expected at least one channel")
	}
	if d.Chain1.ChainName == "" || d.Chain2.ChainName == "" {
		t.Fatalf("missing chain names: %#v %#v", d.Chain1, d.Chain2)
	}
}
