import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchChain, fetchAssetList, fetchVersions } from '../src/index.js';

const LIVE = process.env.CHAIN_REGISTRY_LIVE === '1';

// These tests hit the network; keep them optional and fast.
test('live fetch: chain', { skip: !LIVE }, async () => {
  const chain = await fetchChain('cosmoshub');
  assert.equal(chain.chain_name, 'cosmoshub');
});

test('live fetch: assetlist', { skip: !LIVE }, async () => {
  const al = await fetchAssetList('osmosis');
  assert.equal(al.chain_name, 'osmosis');
  assert.ok(al.assets.length > 0);
});

test('live fetch: versions', { skip: !LIVE }, async () => {
  const v = await fetchVersions('cosmoshub');
  assert.equal(v.chain_name, 'cosmoshub');
  assert.ok(v.versions.length > 0);
});
