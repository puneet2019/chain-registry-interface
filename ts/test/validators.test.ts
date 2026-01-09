import test from 'node:test';
import assert from 'node:assert/strict';
import { fetchChain, fetchAssetList, fetchVersions } from '../src/index.js';

async function expectReject(p: Promise<any>, msg: string) {
  let threw = false;
  try {
    await p;
  } catch (e: any) {
    threw = true;
    assert.match(String(e?.message ?? e), /empty chainName/);
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
