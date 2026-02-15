import { fetchChain, fetchAssetList, fetchVersions, fetchIBCData } from "@puneet_m/chain-registry-interface";

async function fetchChainData() {
  try {
    console.log("=== Fetching Osmosis Chain Data ===");
    
    // Fetch chain information
    console.log("Fetching chain information...");
    const chainInfo = await fetchChain("osmosis");
    console.log(`Chain Name: ${chainInfo.chain_name}`);
    console.log(`Chain ID: ${chainInfo.chain_id}`);
    console.log(`Bech32 Prefix: ${chainInfo.bech32_prefix}`);
    console.log(`Status: ${chainInfo.status}`);
    console.log(`Network Type: ${chainInfo.network_type || 'mainnet'}`);
    console.log(`Pretty Name: ${chainInfo.pretty_name}`);
    console.log(`Website: ${chainInfo.website}`);
    console.log(`Description: ${chainInfo.description}`);
    
    // Fetch asset list
    console.log("\nFetching asset list...");
    const assetList = await fetchAssetList("osmosis");
    console.log(`Number of assets: ${assetList.assets.length}`);
    
    // Show first few assets
    console.log("\nFirst 3 assets:");
    for (let i = 0; i < Math.min(3, assetList.assets.length); i++) {
      const asset = assetList.assets[i];
      console.log(`  - Name: ${asset.name}, Symbol: ${asset.symbol}, Base: ${asset.base}`);
    }
    
    // Show native currency details
    console.log("\nNative Currency Information:");
    console.log(`  Base Denom: ${assetList.assets[0].base}`);
    console.log(`  Display Denom: ${assetList.assets[0].display}`);
    console.log(`  Symbol: ${assetList.assets[0].symbol}`);
    
    // Show chain features
    console.log("\nChain Features:");
    console.log(`  Daemon Name: ${chainInfo.daemon_name}`);
    console.log(`  Node Home: ${chainInfo.node_home}`);
    console.log(`  Key Algorithms: ${chainInfo.key_algos?.join(', ')}`);
    console.log(`  SLIP44: ${chainInfo.slip44}`);
    
    // Show API endpoints
    console.log("\nAPI Endpoints:");
    if (chainInfo.apis?.rpc && chainInfo.apis.rpc.length > 0) {
      console.log(`  RPC: ${chainInfo.apis.rpc[0].address}`);
    }
    if (chainInfo.apis?.rest && chainInfo.apis.rest.length > 0) {
      console.log(`  REST: ${chainInfo.apis.rest[0].address}`);
    }
    if (chainInfo.apis?.grpc && chainInfo.apis.grpc.length > 0) {
      console.log(`  gRPC: ${chainInfo.apis.grpc[0].address}`);
    }
    
    // Fetch versions information
    console.log("\nFetching versions information...");
    try {
      const versions = await fetchVersions("osmosis");
      console.log("Versions information:");
      console.log(`  Chain Name: ${versions.chain_name}`);
      console.log(`  Number of versions: ${versions.versions.length}`);
      if (versions.versions.length > 0) {
        const latestVersion = versions.versions[0];
        console.log(`  Latest version: ${latestVersion.name}`);
        if (latestVersion.tag) console.log(`  Tag: ${latestVersion.tag}`);
        if (latestVersion.height) console.log(`  Height: ${latestVersion.height}`);
      }
    } catch (versionError) {
      console.log(`  Could not fetch versions: ${versionError.message}`);
    }

    // Fetch IBC data information
    console.log("\nFetching IBC data information...");
    try {
      const ibcData = await fetchIBCData();
      console.log("IBC Data information:");
      console.log(`  Schema: ${ibcData["$schema"]}`);
      console.log(`  Total IBC records: ${Object.keys(ibcData).filter(key => key !== '$schema').length}`);
      console.log("  Note: The published package has fetchIBCData but not fetchIBCConnection for specific chain pairs");
    } catch (ibcError) {
      console.log(`  Could not fetch IBC data: ${ibcError.message}`);
      console.log("  Note: IBC data might not be available or accessible");
    }

    console.log("\n=== Chain Data Fetch Complete ===");
  } catch (error) {
    console.error("Error fetching chain data:", error);
  }
}

// Run the example
fetchChainData().catch(console.error);