package main

import (
	"context"
	"fmt"
	"log"

	chainregistry "github.com/puneet2019/chain-registry-interface/sdk-go/chainregistry"
)

func fetchChainData() error {
	ctx := context.Background()

	fmt.Println("=== Fetching Osmosis Chain Data ===")

	// Fetch chain information
	fmt.Println("Fetching chain information...")
	chain, err := chainregistry.FetchChain(ctx, "osmosis")
	if err != nil {
		return fmt.Errorf("failed to fetch chain: %w", err)
	}

	fmt.Printf("Chain Name: %s\n", chain.ChainName)
	fmt.Printf("Chain ID: %s\n", getStringValue(chain.ChainID))
	fmt.Printf("Chain Type: %s\n", chain.ChainType)
	fmt.Printf("Status: %s\n", chain.Status)
	fmt.Printf("Bech32 Prefix: %s\n", getStringValue(chain.Bech32Prefix))
	fmt.Printf("Pretty Name: %s\n", getStringValue(chain.PrettyName))
	fmt.Printf("Description: %s\n", getStringValue(chain.Description))

	// Fetch asset list
	fmt.Println("\nFetching asset list...")
	assets, err := chainregistry.FetchAssetList(ctx, "osmosis")
	if err != nil {
		return fmt.Errorf("failed to fetch asset list: %w", err)
	}

	fmt.Printf("Number of assets: %d\n", len(assets.Assets))

	// Show first few assets
	fmt.Println("\nFirst 3 assets:")
	for i := 0; i < len(assets.Assets) && i < 3; i++ {
		asset := assets.Assets[i]
		fmt.Printf("  - Name: %s, Symbol: %s, Base: %s\n", asset.Name, asset.Symbol, asset.Base)
	}

	// Show native currency details
	fmt.Println("\nNative Currency Information:")
	if len(assets.Assets) > 0 {
		firstAsset := assets.Assets[0]
		fmt.Printf("  Base Denom: %s\n", firstAsset.Base)
		fmt.Printf("  Display Denom: %s\n", firstAsset.Display)
		fmt.Printf("  Symbol: %s\n", firstAsset.Symbol)
	}

	// Show API endpoints if available
	fmt.Println("\nAPI Endpoints:")
	if chain.Apis != nil {
		if len(chain.Apis.RPC) > 0 {
			fmt.Printf("  RPC: %s\n", chain.Apis.RPC[0].Address)
		}
		if len(chain.Apis.REST) > 0 {
			fmt.Printf("  REST: %s\n", chain.Apis.REST[0].Address)
		}
		if len(chain.Apis.GRPC) > 0 {
			fmt.Printf("  gRPC: %s\n", chain.Apis.GRPC[0].Address)
		}
	}

	// Fetch versions information
	fmt.Println("\nFetching versions information...")
	versions, err := chainregistry.FetchVersions(ctx, "osmosis")
	if err != nil {
		fmt.Printf("Could not fetch versions: %v\n", err)
	} else {
		fmt.Println("Versions information:")
		fmt.Printf("  Chain Name: %s\n", versions.ChainName)
		fmt.Printf("  Number of versions: %d\n", len(versions.Versions))
		if len(versions.Versions) > 0 {
			latestVersion := versions.Versions[0]
			fmt.Printf("  Latest version: %s\n", latestVersion.Name)
			if latestVersion.Tag != nil && *latestVersion.Tag != "" {
				fmt.Printf("  Tag: %s\n", *latestVersion.Tag)
			}
			if latestVersion.Height != nil && *latestVersion.Height != 0 {
				fmt.Printf("  Height: %.0f\n", *latestVersion.Height)
			}
		}
	}

	// Fetch IBC connection information (between osmosis and cosmoshub)
	fmt.Println("\nFetching IBC connection information...")
	ibcConnection, err := chainregistry.FetchIBCConnection(ctx, "osmosis", "cosmoshub")
	if err != nil {
		fmt.Printf("Could not fetch IBC connection: %v\n", err)
		fmt.Println("  Note: Not all chain pairs have IBC connections defined in the registry")
	} else {
		fmt.Println("IBC Connection information:")
		fmt.Printf("  Chain 1: %s (%s)\n", ibcConnection.Chain1.ChainName, ibcConnection.Chain1.ChainID)
		fmt.Printf("  Chain 2: %s (%s)\n", ibcConnection.Chain2.ChainName, ibcConnection.Chain2.ChainID)
		fmt.Printf("  Number of channels: %d\n", len(ibcConnection.Channels))
		if len(ibcConnection.Channels) > 0 {
			firstChannel := ibcConnection.Channels[0]
			fmt.Printf("  First channel: %s <-> %s\n", firstChannel.Chain1.ChannelID, firstChannel.Chain2.ChannelID)
			fmt.Printf("  Ordering: %s\n", firstChannel.Ordering)
			fmt.Printf("  Version: %s\n", firstChannel.Version)
		}
	}

	fmt.Println("\n=== Chain Data Fetch Complete ===")
	return nil
}

func getStringValue(s *string) string {
	if s != nil {
		return *s
	}
	return "N/A"
}

func main() {
	if err := fetchChainData(); err != nil {
		log.Fatal(err)
	}
}