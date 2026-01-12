# @puneet_m/core-proto-types

TypeScript types for the core Cosmos stack (cometbft, cosmos-sdk, ibc-go, wasmd), generated in the style of cosmjs-types.

## Overview

This package provides TypeScript bindings for the core Cosmos ecosystem protobuf definitions, generated from the latest relevant tags of:

- [cometbft/cometbft](https://github.com/cometbft/cometbft)
- [cosmos/cosmos-sdk](https://github.com/cosmos/cosmos-sdk) 
- [cosmos/ibc-go](https://github.com/cosmos/ibc-go)
- [CosmWasm/wasmd](https://github.com/CosmWasm/wasmd)

## Usage

```bash
npm install @puneet_m/core-proto-types
```

```typescript
import { CosmosBaseV1Beta1Coin } from '@puneet_m/core-proto-types/cosmos/base/v1beta1/coin';

// Use the generated types in your application
const coin: CosmosBaseV1Beta1Coin = {
  denom: 'uatom',
  amount: '1000000'
};
```

## Generation

The TypeScript bindings are generated using [Telescope](https://github.com/cosmology-tech/telescope) from proto definition bundles created with the latest relevant tags from each repository.

To regenerate the bindings:

```bash
# Build the proto bundles with latest tags and generate TypeScript
make proto-core-ts
```

This will:
1. Fetch the latest relevant tags for each core module
2. Create proto bundles for each module
3. Generate TypeScript bindings using Telescope
4. Output to `proto-bundles-ts-core-latest/<module>/_bindings/ts`

## Structure

The package follows the same directory structure as the source proto files, making it easy to find the types you need. Each module (cometbft, cosmos-sdk, etc.) has its own generated bindings that can be imported independently.

## License

This project is licensed under either of

- Apache License, Version 2.0 ([LICENSE-APACHE](../LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](../LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.