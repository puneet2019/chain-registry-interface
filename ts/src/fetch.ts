import type { Chain, AssetList, MemoKeys, Versions, IBCData } from "./types.js";

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
function versionsUrl(name: string) {
  return `${RAW_BASE}/${name}/versions.json`;
}
function ibcConnectionUrlInternal(a: string, b: string) {
  const [x, y] = a <= b ? [a, b] : [b, a];
  return `${RAW_BASE}/_IBC/${x}-${y}.json`;
}

export function ibcConnectionUrl(a: string, b: string): string {
  if (!a || !b) throw new Error("empty chain names");
  return ibcConnectionUrlInternal(a, b);
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


export async function fetchVersions(chainName: string): Promise<Versions> {
  if (!chainName) throw new Error("empty chainName");
  return fetchJson<Versions>(versionsUrl(chainName));
}

export async function fetchIBCConnection(chainA: string, chainB: string): Promise<IBCData> {
  if (!chainA || !chainB) throw new Error("empty chain names");
  const url = ibcConnectionUrlInternal(chainA, chainB);
  return fetchJson<IBCData>(url);
}
