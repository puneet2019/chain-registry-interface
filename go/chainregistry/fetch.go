package chainregistry

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"
)

const rawBase = "https://raw.githubusercontent.com/cosmos/chain-registry/master"

// httpClient is a shared, no-timeout client. Callers should pass a context with deadline.
var httpClient = &http.Client{}

func buildChainURL(chainName string) string {
	return fmt.Sprintf("%s/%s/chain.json", rawBase, chainName)
}

func buildChainURLTestnet(chainName string) string {
	return fmt.Sprintf("%s/testnets/%s/chain.json", rawBase, chainName)
}

func buildAssetListURL(chainName string) string {
	return fmt.Sprintf("%s/%s/assetlist.json", rawBase, chainName)
}

func buildAssetListURLTestnet(chainName string) string {
	return fmt.Sprintf("%s/testnets/%s/assetlist.json", rawBase, chainName)
}

func buildMemoKeysURL(_ string) string { // chainName is unused; kept for signature consistency
	return fmt.Sprintf("%s/_memo_keys/ICS20_memo_keys.json", rawBase)
}

func buildIBCDataURL() string {
	return fmt.Sprintf("%s/ibc/ibc-data.json", rawBase)
}

func buildIBCConnectionURL(chainA, chainB string) string {
	// Alphabetical order: a-b
	if chainA > chainB {
		chainA, chainB = chainB, chainA
	}
	return fmt.Sprintf("%s/_IBC/%s-%s.json", rawBase, chainA, chainB)
}

func buildVersionsURL(chainName string) string {
	return fmt.Sprintf("%s/%s/versions.json", rawBase, chainName)
}

func buildVersionsURLTestnet(chainName string) string {
	return fmt.Sprintf("%s/testnets/%s/versions.json", rawBase, chainName)
}

// fetchJSON performs an HTTP GET and decodes the JSON body into v.
// No caching or validation is performed beyond JSON decoding.
func fetchJSON(ctx context.Context, url string, v any) error {
	if ctx == nil {
		return errors.New("nil context")
	}
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
	if err != nil {
		return err
	}
	req.Header.Set("Accept", "application/json")
	req.Header.Set("User-Agent", "chain-registry-interface-go/0.0")

	resp, err := httpClient.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		b, _ := io.ReadAll(io.LimitReader(resp.Body, 4<<10))
		return fmt.Errorf("unexpected status %d from %s: %s", resp.StatusCode, url, string(b))
	}
	dec := json.NewDecoder(resp.Body)
	return dec.Decode(v)
}

// isNotFound returns true if the error looks like an HTTP 404 from fetchJSON.
func isNotFound(err error) bool {
	if err == nil {
		return false
	}
	return strings.Contains(err.Error(), "status 404")
}

// FetchChain fetches and decodes the chain.json for the given chain name from the
// public cosmos/chain-registry GitHub repository. Tries root, then testnets/.
func FetchChain(ctx context.Context, chainName string) (*Chain, error) {
	if chainName == "" {
		return nil, errors.New("empty chainName")
	}
	var c Chain
	if err := fetchJSON(ctx, buildChainURL(chainName), &c); err != nil {
		// fallback to testnets
		if !isNotFound(err) {
			return nil, err
		}
		if err2 := fetchJSON(ctx, buildChainURLTestnet(chainName), &c); err2 != nil {
			return nil, err // return original 404
		}
	}
	return &c, nil
}

// FetchAssetList fetches assetlist.json for a given chain. Tries root, then testnets/.
func FetchAssetList(ctx context.Context, chainName string) (*AssetList, error) {
	if chainName == "" {
		return nil, errors.New("empty chainName")
	}
	var a AssetList
	if err := fetchJSON(ctx, buildAssetListURL(chainName), &a); err != nil {
		if !isNotFound(err) {
			return nil, err
		}
		if err2 := fetchJSON(ctx, buildAssetListURLTestnet(chainName), &a); err2 != nil {
			return nil, err
		}
	}
	return &a, nil
}

// FetchMemoKeys fetches memo_keys.json from the registry.
func FetchMemoKeys(ctx context.Context, chainName string) (*MemoKeys, error) { // chainName unused
	u := buildMemoKeysURL("")
	var m MemoKeys
	if err := fetchJSON(ctx, u, &m); err != nil {
		return nil, err
	}
	return &m, nil
}

// FetchIBCData fetches ibc/ibc-data.json from the registry.
func FetchIBCData(ctx context.Context, chainName string) (*IBCData, error) { // chainName unused
	u := buildIBCDataURL()
	var d IBCData
	if err := fetchJSON(ctx, u, &d); err != nil {
		return nil, err
	}
	return &d, nil
}

// FetchVersions fetches versions.json for a given chain. Tries root, then testnets/.
func FetchVersions(ctx context.Context, chainName string) (*Versions, error) {
	if chainName == "" {
		return nil, errors.New("empty chainName")
	}
	var v Versions
	if err := fetchJSON(ctx, buildVersionsURL(chainName), &v); err != nil {
		if !isNotFound(err) {
			return nil, err
		}
		if err2 := fetchJSON(ctx, buildVersionsURLTestnet(chainName), &v); err2 != nil {
			return nil, err
		}
	}
	return &v, nil
}

// WithTimeout is a small helper to create a child context with a default timeout
// useful in examples or tests.
func WithTimeout(parent context.Context, d time.Duration) (context.Context, context.CancelFunc) {
	if parent == nil {
		parent = context.Background()
	}
	return context.WithTimeout(parent, d)
}

// FetchIBCConnection fetches IBC connection data for a pair of chains using the
// deterministic _IBC/<a>-<b>.json path where a and b are sorted alphabetically.
func FetchIBCConnection(ctx context.Context, chainA, chainB string) (*IBCData, error) {
	if chainA == "" || chainB == "" {
		return nil, errors.New("empty chain names")
	}
	u := buildIBCConnectionURL(chainA, chainB)
	var d IBCData
	if err := fetchJSON(ctx, u, &d); err != nil {
		return nil, err
	}
	return &d, nil
}
