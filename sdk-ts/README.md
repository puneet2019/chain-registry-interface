# @puneet_m/chain-registry-interface

Typed runtime access to Cosmos chain-registry (TypeScript). No embedded data.

## Overview

This package provides TypeScript types and fetch functions for accessing the Cosmos chain-registry at runtime. It allows you to programmatically access chain information, asset lists, IBC connections, and other registry data.

## Installation

```bash
npm install @puneet_m/chain-registry-interface
```

## Usage

```typescript
import { fetchChain, fetchAssetList, fetchIBCConnection } from '@puneet_m/chain-registry-interface';

// Fetch chain information
const chain = await fetchChain('cosmoshub');
console.log(chain.pretty_name);

// Fetch asset list
const assetList = await fetchAssetList('osmosis');
console.log(assetList.assets);

// Fetch IBC connection data
const ibcData = await fetchIBCConnection('cosmoshub', 'osmosis');
console.log(ibcData.channels);
```

## API

- `fetchChain(chainName: string)`: Fetches chain information
- `fetchAssetList(chainName: string)`: Fetches asset list for a chain
- `fetchMemoKeys()`: Fetches memo keys
- `fetchVersions(chainName: string)`: Fetches version information
- `fetchIBCConnection(chainA: string, chainB: string)`: Fetches IBC connection data between two chains
- `ibcConnectionUrl(chainA: string, chainB: string)`: Generates the URL for IBC connection data

## License

This project is licensed under the Apache License 2.0 or MIT license, at your option.