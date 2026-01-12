import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchChain, fetchAssetList, fetchVersions, fetchIBCConnection, ibcConnectionUrl } from '../src/index.js';

async function expectReject(p: Promise<any>, msg: string, rx: RegExp = /empty chainName|empty chain names/) {
  let threw = false;
  try {
    await p;
  } catch (e: any) {
    threw = true;
    assert.match(String(e?.message ?? e), rx);
  }
  assert.equal(threw, true, msg);
}

test('fetchChain rejects empty name', async () => {
  await expectReject(fetchChain('' as any), 'fetchChain should reject empty chainName');
});

test('fetchAssetList rejects empty name', async () => {
  await expectReject(fetchAssetList('' as any), 'fetchAssetList should reject empty chainName');
});

test('fetchVersions rejects empty name', async () => {
  await expectReject(fetchVersions('' as any), 'fetchVersions should reject empty chainName');
});

test('fetchIBCConnection rejects empty names', async () => {
  await expectReject(fetchIBCConnection('' as any, 'osmosis'), 'fetchIBCConnection should reject empty chain names', /empty chain names/);
  await expectReject(fetchIBCConnection('cosmoshub', '' as any), 'fetchIBCConnection should reject empty chain names', /empty chain names/);
});

test('ibcConnectionUrl sorts pair alphabetically', () => {
  const u1 = ibcConnectionUrl('cosmoshub', 'agoric');
  const u2 = ibcConnectionUrl('agoric', 'cosmoshub');
  assert.equal(u1, u2);
  assert.match(u1, /_IBC\/agoric-cosmoshub\.json$/);
});
