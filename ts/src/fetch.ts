import type { Chain, AssetList, IBCData, MemoKeys, Versions } from "./types.js";

const RAW_BASE = "https://raw.githubusercontent.com/cosmos/chain-registry/master" as const;

function chainUrl(name: string) {
  return `${RAW_BASE}/${name}/chain.json`;
}
function assetListUrl(name: string) {
  return `${RAW_BASE}/${name}/assetlist.json`;
}
function memoKeysUrl() {
  return `${RAW_BASE}/_memo_keys/ICS20_memo_keys.json`;
}
function ibcDataUrl() {
  return `${RAW_BASE}/ibc/ibc-data.json`;
}
function versionsUrl(name: string) {
  return `${RAW_BASE}/${name}/versions.json`;
}

async function fetchJson<T>(url: string): Promise<T> {
  const resp = await fetch(url, {
    headers: {
      "Accept": "application/json",
      "User-Agent": "chain-registry-interface-ts/0.0"
    }
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`unexpected status ${resp.status} from ${url}: ${text.slice(0, 1024)}`);
  }
  return resp.json() as Promise<T>;
}

export async function fetchChain(chainName: string): Promise<Chain> {
  if (!chainName) throw new Error("empty chainName");
  return fetchJson<Chain>(chainUrl(chainName));
}

export async function fetchAssetList(chainName: string): Promise<AssetList> {
  if (!chainName) throw new Error("empty chainName");
  return fetchJson<AssetList>(assetListUrl(chainName));
}

export async function fetchMemoKeys(): Promise<MemoKeys> {
  return fetchJson<MemoKeys>(memoKeysUrl());
}

export async function fetchIBCData(): Promise<IBCData> {
  return fetchJson<IBCData>(ibcDataUrl());
}

export async function fetchVersions(chainName: string): Promise<Versions> {
  if (!chainName) throw new Error("empty chainName");
  return fetchJson<Versions>(versionsUrl(chainName));
}
