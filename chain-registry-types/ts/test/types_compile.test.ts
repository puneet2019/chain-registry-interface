import test from 'node:test';
import assert from 'node:assert/strict';
import type { Chain, AssetList, Versions } from '../src/types.js';

// This test primarily ensures the TS types compile and basic shape expectations hold at runtime.
test('types compile and basic shapes', () => {
  const chain: Chain = {
    "$schema": "../chain.schema.json",
    chain_name: "cosmoshub",
    chain_type: "cosmos",
    status: "live",
  };
  assert.equal(chain.chain_name, 'cosmoshub');

  const al: AssetList = {
    "$schema": "../assetlist.schema.json",
    chain_name: "osmosis",
    assets: [
      {
        denom_units: [
          { denom: 'uosmo', exponent: 0 },
          { denom: 'osmo', exponent: 6 },
        ],
        type_asset: 'sdk.coin',
        base: 'uosmo',
        name: 'Osmosis',
        display: 'osmo',
        symbol: 'OSMO',
      },
    ],
  };
  assert.equal(al.chain_name, 'osmosis');
  assert.ok(al.assets.length > 0);

  const ver: Versions = {
    "$schema": "../versions.schema.json",
    chain_name: "cosmoshub",
    versions: [ { name: 'v1' } ],
  };
  assert.equal(ver.chain_name, 'cosmoshub');
  assert.ok(ver.versions.length > 0);
});
