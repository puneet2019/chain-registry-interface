/**
 * Example: CosmosHub bank send transaction using generated proto types.
 *
 * Uses the ts-proto generated types from proto/cosmoshub/ts/v25.2.0/.
 * Run: npx ts-node cosmoshub-send.ts
 *
 * This is a serialization example — broadcasting requires a live node
 * and signing keys.
 */

// Import generated types from proto packages
// These are the ts-proto generated encode/decode helpers
import { MsgSend } from "../../../proto/cosmoshub/ts/v25.2.0/cosmos/bank/v1beta1/tx";
import { Coin } from "../../../proto/cosmoshub/ts/v25.2.0/cosmos/base/v1beta1/coin";
import { TxBody, TxRaw, AuthInfo, Fee, SignDoc } from "../../../proto/cosmoshub/ts/v25.2.0/cosmos/tx/v1beta1/tx";
import { Any } from "../../../proto/cosmoshub/ts/v25.2.0/google/protobuf/any";

// --- Step 1: Build MsgSend ---
const msgSend: MsgSend = {
  fromAddress: "cosmos1qypqxpq9qcrsszg2pvxq6rs0zqg3yyc5lzv7xu",
  toAddress: "cosmos1r5v5srda7xfth3hn2s26txvrcrntldjumt8mhl",
  amount: [{ denom: "uatom", amount: "1000000" }], // 1 ATOM
};

// --- Step 2: Encode MsgSend and wrap in Any ---
const msgSendBytes = MsgSend.encode(msgSend).finish();
const msgAny: Any = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  value: msgSendBytes,
};

// --- Step 3: Build TxBody ---
const txBody: TxBody = {
  messages: [msgAny],
  memo: "sent via proto-registry example",
  timeoutHeight: 0,
  unordered: false,
  timeoutTimestamp: undefined,
  extensionOptions: [],
  nonCriticalExtensionOptions: [],
};

// --- Step 4: Build AuthInfo with fee ---
const authInfo: AuthInfo = {
  signerInfos: [],      // Real tx needs signer public key + sequence
  fee: {
    amount: [{ denom: "uatom", amount: "5000" }],
    gasLimit: 200000,
    payer: "",
    granter: "",
  },
  tip: undefined,
};

// --- Step 5: Serialize for signing ---
const bodyBytes = TxBody.encode(txBody).finish();
const authInfoBytes = AuthInfo.encode(authInfo).finish();

const signDoc: SignDoc = {
  bodyBytes,
  authInfoBytes,
  chainId: "cosmoshub-4",
  accountNumber: 12345,
};
const signDocBytes = SignDoc.encode(signDoc).finish();

// --- Step 6: Build TxRaw (broadcast payload) ---
const txRaw: TxRaw = {
  bodyBytes,
  authInfoBytes,
  signatures: [new Uint8Array([0xde, 0xad, 0xbe, 0xef])], // placeholder
};
const txRawBytes = TxRaw.encode(txRaw).finish();

// --- Output ---
console.log("=== CosmosHub: Bank Send (1 ATOM) ===");
console.log(`  MsgSend type_url : ${msgAny.typeUrl}`);
console.log(`  MsgSend bytes    : ${Buffer.from(msgSendBytes).toString("hex").slice(0, 64)}...`);
console.log(`  SignDoc  (${signDocBytes.length} B)  : ${Buffer.from(signDocBytes).toString("hex").slice(0, 64)}...`);
console.log(`  TxRaw   (${txRawBytes.length} B)  : ${Buffer.from(txRawBytes).toString("hex").slice(0, 64)}...`);
console.log();
console.log("To broadcast, sign the SignDoc bytes and replace the placeholder signature.");
console.log("Then POST the base64-encoded TxRaw to /cosmos/tx/v1beta1/txs on a CosmosHub node.");
