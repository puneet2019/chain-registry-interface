// TypeScript types mirroring Cosmos chain-registry schemas (core fields).
// Optional fields are marked optional; open-ended maps use Record<string, any>.

export interface Chain {
  "$schema": string;
  chain_name: string;
  chain_type: string;
  status: string;

  chain_id?: string;
  pre_fork_chain_name?: string;
  pretty_name?: string;
  website?: string;
  network_type?: string;
  bech32_prefix?: string;
  bech32_config?: Bech32Config;
  logo_URIs?: LogoURIs;
  description?: string;
  peers?: Peers;
  apis?: Apis;
  explorers?: Explorer[];
  keywords?: string[];
  extra_codecs?: string[];
}

export interface Bech32Config {
  bech32PrefixAccAddr?: string;
  bech32PrefixAccPub?: string;
  bech32PrefixValAddr?: string;
  bech32PrefixValPub?: string;
  bech32PrefixConsAddr?: string;
  bech32PrefixConsPub?: string;
}

export interface LogoURIs {
  png?: string;
  svg?: string;
}

export interface Peers {
  seeds?: Peer[];
  persistent_peers?: Peer[];
}

export interface Peer {
  id: string;
  address: string;
  provider?: string;
}

export interface Apis {
  rpc?: Endpoint[];
  rest?: Endpoint[];
  grpc?: Endpoint[];
  wss?: Endpoint[];
  "grpc-web"?: Endpoint[];
  "evm-http-jsonrpc"?: Endpoint[];
}

export interface Endpoint {
  address: string;
  provider?: string;
  archive?: boolean;
}

export interface Explorer {
  kind?: string;
  url?: string;
  tx_page?: string;
  account_page?: string;
  validator_page?: string;
  proposal_page?: string;
  block_page?: string;
}

// AssetList and nested types (subset aligned with Go/Rust impl)
export interface AssetList {
  "$schema": string;
  chain_name: string;
  assets: Asset[];
}

export interface Asset {
  deprecated?: boolean;
  description?: string;
  extended_description?: string;
  denom_units: DenomUnit[];
  type_asset: string;
  address?: string;
  base: string;
  name: string;
  display: string;
  symbol: string;
  traces?: Trace[];
  logo_URIs?: LogoURIs;
  coingecko_id?: string;
  images?: AssetImage[];
}

export interface DenomUnit {
  denom: string;
  exponent?: number;
  aliases?: string[];
}

export interface Trace {
  type?: string;
  counterparty?: Counterparty;
  chain?: TraceChain;
}

export interface Counterparty {
  chain_name?: string;
  base_denom?: string;
  channel_id?: string;
}

export interface TraceChain {
  path?: string;
  port?: string;
  channel_id?: string;
}

export interface AssetImage {
  png?: string;
  svg?: string;
  theme?: ImageTheme;
}

export interface ImageTheme {
  circle?: boolean;
  dark_mode?: boolean;
}

// MemoKeys
export interface MemoKeys {
  "$schema": string;
  memo_keys: MemoKey[];
}

export interface MemoKey {
  key: string;
  description: string;
  git_repo: string;
  memo: Record<string, any>;
}

// IBCData
export interface IBCData {
  "$schema": string;
  chain_1: IBCChainInfo;
  chain_2: IBCChainInfo;
  channels: IBCChannel[];
  operators?: IBCOperator[];
}

export interface IBCChainInfo {
  chain_name: string;
  chain_id: string;
  client_id: string;
  connection_id: string;
}

export interface IBCChannel {
  chain_1: IBCChannelInfo;
  chain_2: IBCChannelInfo;
  ordering: string;
  version: string;
  fee_version?: string;
  tags?: IBCTags;
}

export interface IBCChannelInfo {
  channel_id: string;
  port_id: string;
  client_id?: string;
  connection_id?: string;
}

export interface IBCTags {
  preferred?: boolean;
  status?: string;
}

export interface IBCOperator {
  chain_1: IBCOperatorInfo;
  chain_2: IBCOperatorInfo;
  memo: string;
  name: string;
  discord_handle?: string;
}

export interface IBCOperatorInfo {
  address?: string;
}

// Versions
export interface Versions {
  "$schema": string;
  chain_name: string;
  versions: ChainVersion[];
}

export interface ChainVersion {
  name: string;
  tag?: string;
  height?: number;
  proposal?: number;
  previous_version_name?: string;
  next_version_name?: string;
  recommended_version?: string;
  compatible_versions?: string[];
  sdk?: SDKInfo;
  consensus?: ConsensusInfo;
  cosmwasm?: CosmwasmInfo;
  ibc?: IBCInfo;
  language?: LanguageInfo;
  binaries?: Binaries;
}

export interface SDKInfo {
  type: string;
  version?: string;
  repo?: string;
  tag?: string;
}

export interface ConsensusInfo {
  type: string;
  version?: string;
  repo?: string;
  tag?: string;
}

export interface CosmwasmInfo {
  version?: string;
  repo?: string;
  tag?: string;
  enabled?: boolean;
  path?: string;
}

export interface IBCInfo {
  type: string;
  version?: string;
  repo?: string;
  tag?: string;
  ics_enabled?: string[];
}

export interface LanguageInfo {
  type: string;
  version?: string;
  repo?: string;
  tag?: string;
}

export interface Binaries {
  "linux/amd64"?: string;
  "linux/arm64"?: string;
  "darwin/amd64"?: string;
  "darwin/arm64"?: string;
  "windows/amd64"?: string;
  "windows/arm64"?: string;
}
