//! Runtime types and minimal runtime helpers for the Cosmos chain-registry schemas.
//! - Exact field names via serde rename
//! - Optional fields will use Option<T> in follow-up commits
//! - Open-ended maps will use HashMap<String, serde_json::Value>

use serde::{Deserialize, Serialize};
use std::collections::HashMap;

const RAW_BASE: &str = "https://raw.githubusercontent.com/cosmos/chain-registry/master";

/// Chain corresponds to chain.schema.json root object (initial pass: required fields only).
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Chain {
    #[serde(rename = "$schema")]
    pub dollar_schema: String,

    #[serde(rename = "chain_name")]
    pub chain_name: String,

    #[serde(rename = "chain_type")]
    pub chain_type: String,

    #[serde(rename = "status")]
    pub status: String,
}

// AssetList corresponds to assetlist.schema.json (required fields + common optionals)
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct AssetList {
    #[serde(rename = "$schema")]
    pub dollar_schema: String,
    #[serde(rename = "chain_name")]
    pub chain_name: String,
    pub assets: Vec<Asset>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Asset {
    pub denom_units: Vec<DenomUnit>,
    pub type_asset: String,
    pub base: String,
    pub display: String,
    pub name: String,
    pub symbol: String,
    #[serde(rename = "logo_URIs")] 
    pub logo_uris: Option<LogoUris>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct DenomUnit {
    pub denom: String,
    pub exponent: Option<u32>,
    pub aliases: Option<Vec<String>>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct LogoUris {
    pub png: Option<String>,
    pub svg: Option<String>,
}

// MemoKeys corresponds to memo_keys.schema.json
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct MemoKeys {
    #[serde(rename = "$schema")]
    pub dollar_schema: String,
    #[serde(rename = "memo_keys")]
    pub memo_keys: Vec<MemoKey>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct MemoKey {
    pub key: String,
    pub description: String,
    #[serde(rename = "git_repo")]
    pub git_repo: String,
    pub memo: HashMap<String, serde_json::Value>,
}

// IbcData corresponds to ibc_data.schema.json
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct IbcData {
    #[serde(rename = "$schema")]
    pub dollar_schema: String,
    #[serde(rename = "chain_1")]
    pub chain_1: ChainInfo,
    #[serde(rename = "chain_2")]
    pub chain_2: ChainInfo,
    pub channels: Vec<Channel>,
    pub operators: Option<Vec<Operator>>, 
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ChainInfo {
    #[serde(rename = "chain_name")]
    pub chain_name: String,
    #[serde(rename = "chain_id")]
    pub chain_id: String,
    #[serde(rename = "client_id")]
    pub client_id: String,
    #[serde(rename = "connection_id")]
    pub connection_id: String,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Channel {
    #[serde(rename = "chain_1")]
    pub chain_1: ChannelInfo,
    #[serde(rename = "chain_2")]
    pub chain_2: ChannelInfo,
    pub ordering: String,
    pub version: String,
    pub fee_version: Option<String>,
    pub tags: Option<ChannelTags>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ChannelInfo {
    pub channel_id: String,
    pub port_id: String,
    pub client_id: Option<String>,
    pub connection_id: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ChannelTags {
    pub preferred: Option<bool>,
    pub status: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Operator {
    #[serde(rename = "chain_1")]
    pub chain_1: OperatorInfo,
    #[serde(rename = "chain_2")]
    pub chain_2: OperatorInfo,
    pub memo: String,
    pub name: String,
    pub discord_handle: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct OperatorInfo {
    pub address: Option<String>,
}

fn chain_url(name: &str) -> String {
    format!("{}/{}/chain.json", RAW_BASE, name)
}

fn assetlist_url(name: &str) -> String {
    format!("{}/{}/assetlist.json", RAW_BASE, name)
}

fn memo_keys_url() -> String {
    format!("{}/memo_keys.json", RAW_BASE)
}

fn ibc_data_url() -> String {
    format!("{}/ibc/ibc-data.json", RAW_BASE)
}

fn versions_url(name: &str) -> String {
    format!("{}/{}/versions.json", RAW_BASE, name)
}

/// Fetch a chain.json by chain name from the public registry.
/// No caching or validation beyond JSON parsing.
pub async fn fetch_chain(chain_name: &str) -> Result<Chain, reqwest::Error> {
    let url = chain_url(chain_name);
    let resp = reqwest::Client::new()
        .get(url)
        .header("Accept", "application/json")
        .header("User-Agent", "chain-registry-interface-rust/0.0")
        .send()
        .await?;
    let chain = resp.json::<Chain>().await?;
    Ok(chain)
}

/// Fetch an assetlist.json by chain name.
pub async fn fetch_asset_list(chain_name: &str) -> Result<AssetList, reqwest::Error> {
    let url = assetlist_url(chain_name);
    let resp = reqwest::Client::new()
        .get(url)
        .header("Accept", "application/json")
        .header("User-Agent", "chain-registry-interface-rust/0.0")
        .send()
        .await?;
    let al = resp.json::<AssetList>().await?;
    Ok(al)
}

/// Fetch memo_keys.json (root of registry). Name parameter kept for signature symmetry.
pub async fn fetch_memo_keys(_chain_name: &str) -> Result<MemoKeys, reqwest::Error> {
    let url = memo_keys_url();
    let resp = reqwest::Client::new()
        .get(url)
        .header("Accept", "application/json")
        .header("User-Agent", "chain-registry-interface-rust/0.0")
        .send()
        .await?;
    let mk = resp.json::<MemoKeys>().await?;
    Ok(mk)
}

/// Fetch ibc/ibc-data.json from the registry root. Name parameter kept for signature symmetry.
pub async fn fetch_ibc_data(_chain_name: &str) -> Result<IbcData, reqwest::Error> {
    let url = ibc_data_url();
    let resp = reqwest::Client::new()
        .get(url)
        .header("Accept", "application/json")
        .header("User-Agent", "chain-registry-interface-rust/0.0")
        .send()
        .await?;
    let d = resp.json::<IbcData>().await?;
    Ok(d)
}

/// Fetch versions.json by chain name.
pub async fn fetch_versions(chain_name: &str) -> Result<Versions, reqwest::Error> {
    let url = versions_url(chain_name);
    let resp = reqwest::Client::new()
        .get(url)
        .header("Accept", "application/json")
        .header("User-Agent", "chain-registry-interface-rust/0.0")
        .send()
        .await?;
    let v = resp.json::<Versions>().await?;
    Ok(v)
}


// Versions corresponds to versions.schema.json
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct Versions {
    #[serde(rename = "$schema")]
    pub dollar_schema: String,
    #[serde(rename = "chain_name")]
    pub chain_name: String,
    pub versions: Vec<ChainVersion>,
}

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
pub struct ChainVersion {
    pub name: String,
    pub tag: Option<String>,
    pub height: Option<f64>,
    pub proposal: Option<f64>,
    #[serde(rename = "previous_version_name")]
    pub previous_version_name: Option<String>,
    #[serde(rename = "next_version_name")]
    pub next_version_name: Option<String>,
    #[serde(rename = "recommended_version")]
    pub recommended_version: Option<String>,
    #[serde(rename = "compatible_versions")]
    pub compatible_versions: Option<Vec<String>>,
    pub sdk: Option<SdkInfo>,
    pub consensus: Option<ConsensusInfo>,
    pub cosmwasm: Option<CosmwasmInfo>,
    pub ibc: Option<IbcInfo>,
    pub language: Option<LanguageInfo>,
    pub binaries: Option<Binaries>,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct SdkInfo {
    #[serde(rename = "type")]
    pub r#type: String,
    pub version: Option<String>,
    pub repo: Option<String>,
    pub tag: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct ConsensusInfo {
    #[serde(rename = "type")]
    pub r#type: String,
    pub version: Option<String>,
    pub repo: Option<String>,
    pub tag: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct CosmwasmInfo {
    pub version: Option<String>,
    pub repo: Option<String>,
    pub tag: Option<String>,
    pub enabled: Option<bool>,
    pub path: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct IbcInfo {
    #[serde(rename = "type")]
    pub r#type: String,
    pub version: Option<String>,
    pub repo: Option<String>,
    pub tag: Option<String>,
    #[serde(rename = "ics_enabled")]
    pub ics_enabled: Option<Vec<String>>,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct LanguageInfo {
    #[serde(rename = "type")]
    pub r#type: String,
    pub version: Option<String>,
    pub repo: Option<String>,
    pub tag: Option<String>,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct Binaries {
    #[serde(rename = "linux/amd64")]
    pub linux_amd64: Option<String>,
    #[serde(rename = "linux/arm64")]
    pub linux_arm64: Option<String>,
    #[serde(rename = "darwin/amd64")]
    pub darwin_amd64: Option<String>,
    #[serde(rename = "darwin/arm64")]
    pub darwin_arm64: Option<String>,
    #[serde(rename = "windows/amd64")]
    pub windows_amd64: Option<String>,
    #[serde(rename = "windows/arm64")]
    pub windows_arm64: Option<String>,
}
