use chain_registry_interface::{fetch_chain, fetch_asset_list, fetch_versions, fetch_ibc_connection};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    fetch_chain_data().await?;
    Ok(())
}

async fn fetch_chain_data() -> Result<(), Box<dyn std::error::Error>> {
    println!("=== Fetching Osmosis Chain Data ===");

    // Fetch chain information
    println!("Fetching chain information...");
    let chain = fetch_chain("osmosis").await?;
    println!("Chain Name: {}", chain.chain_name);
    println!("Chain Type: {}", chain.chain_type);
    println!("Status: {}", chain.status);

    // Fetch asset list
    println!("\nFetching asset list...");
    let assets = fetch_asset_list("osmosis").await?;
    println!("Number of assets: {}", assets.assets.len());

    // Show first few assets
    println!("\nFirst 3 assets:");
    for i in 0..std::cmp::min(3, assets.assets.len()) {
        let asset = &assets.assets[i];
        println!("  - Name: {}, Symbol: {}, Base: {}",
                 asset.name,
                 asset.symbol,
                 asset.base);
    }

    // Show native currency details
    println!("\nNative Currency Information:");
    if !assets.assets.is_empty() {
        let first_asset = &assets.assets[0];
        println!("  Base Denom: {}", first_asset.base);
        println!("  Display Denom: {}", first_asset.display);
        println!("  Symbol: {}", first_asset.symbol);
    }

    // Show chain features
    println!("\nChain Features:");
    println!("  Chain Type: {}", chain.chain_type);
    println!("  Status: {}", chain.status);

    // Fetch versions information
    println!("\nFetching versions information...");
    match fetch_versions("osmosis").await {
        Ok(versions) => {
            println!("Versions information:");
            println!("  Chain Name: {}", versions.chain_name);
            println!("  Number of versions: {}", versions.versions.len());
            if !versions.versions.is_empty() {
                let latest_version = &versions.versions[0];
                println!("  Latest version: {}", latest_version.name);
                if let Some(ref tag) = latest_version.tag {
                    println!("  Tag: {}", tag);
                }
                if let Some(height) = latest_version.height {
                    println!("  Height: {}", height);
                }
            }
        }
        Err(e) => {
            println!("  Could not fetch versions: {}", e);
        }
    }

    // Fetch IBC connection information (between osmosis and cosmoshub)
    println!("\nFetching IBC connection information...");
    match fetch_ibc_connection("osmosis", "cosmoshub").await {
        Ok(ibc_connection) => {
            println!("IBC Connection information:");
            println!("  Chain 1: {} ({})", ibc_connection.chain_1.chain_name, ibc_connection.chain_1.chain_id);
            println!("  Chain 2: {} ({})", ibc_connection.chain_2.chain_name, ibc_connection.chain_2.chain_id);
            println!("  Number of channels: {}", ibc_connection.channels.len());
            if !ibc_connection.channels.is_empty() {
                let first_channel = &ibc_connection.channels[0];
                println!("  First channel: {} <-> {}", first_channel.chain_1.channel_id, first_channel.chain_2.channel_id);
                println!("  Ordering: {}", first_channel.ordering);
                println!("  Version: {}", first_channel.version);
            }
        }
        Err(e) => {
            println!("  Could not fetch IBC connection: {}", e);
            println!("  Note: Not all chain pairs have IBC connections defined in the registry");
        }
    }

    println!("\n=== Chain Data Fetch Complete ===");

    Ok(())
}