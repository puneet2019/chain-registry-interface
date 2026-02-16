/**
 * Example: Osmosis token swap using generated proto types.
 *
 * Uses the ts-proto generated types from proto/osmosis/ts/v31.0.0/.
 * Run: npx ts-node osmosis-swap.ts
 *
 * This is a serialization example — broadcasting requires a live node
 * and signing keys.
 */

// Osmosis-specific generated types
import {
  SwapAmountInRoute,
  SwapAmountInSplitRoute,
} from "../../../proto/osmosis/ts/v31.0.0/osmosis/poolmanager/v1beta1/swap_route";

// --- Step 1: Define swap routes ---

// Simple single-pool swap: OSMO -> ATOM via pool 1
const route: SwapAmountInRoute = {
  poolId: 1,
  tokenOutDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2", // ATOM on Osmosis
};

// Multi-hop swap: OSMO -> ATOM -> USDC
const multiHopRoutes: SwapAmountInRoute[] = [
  { poolId: 1, tokenOutDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2" },
  { poolId: 678, tokenOutDenom: "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858" }, // USDC
];

// Split route: split input across multiple paths
const splitRoute: SwapAmountInSplitRoute = {
  pools: multiHopRoutes,
  tokenInAmount: "5000000", // 5 OSMO in uosmo
};

// --- Step 2: Encode routes ---
const routeBytes = SwapAmountInRoute.encode(route).finish();
const splitRouteBytes = SwapAmountInSplitRoute.encode(splitRoute).finish();

// --- Step 3: Construct MsgSwapExactAmountIn manually ---
// The full MsgSwapExactAmountIn type didn't compile (missing cosmos-sdk deps),
// so we show the structure and how to wrap it in a transaction.
//
// MsgSwapExactAmountIn {
//   sender: "osmo1...",
//   routes: SwapAmountInRoute[],
//   tokenIn: Coin { denom: "uosmo", amount: "5000000" },
//   tokenOutMinAmount: "100000",
// }

const msgTypeUrl = "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn";

// In production, you'd encode the full message:
//   const msgBytes = MsgSwapExactAmountIn.encode(msg).finish();
//   const txBody = TxBody.encode({
//     messages: [{ typeUrl: msgTypeUrl, value: msgBytes }],
//     memo: "",
//   }).finish();

// --- Output ---
console.log("=== Osmosis: Swap 5 OSMO -> ATOM via Pool 1 ===");
console.log(`  Route: pool=${route.poolId} -> ${route.tokenOutDenom.slice(0, 20)}...`);
console.log(`  Route bytes (${routeBytes.length} B): ${Buffer.from(routeBytes).toString("hex")}`);
console.log();
console.log("=== Osmosis: Multi-hop OSMO -> ATOM -> USDC ===");
for (const hop of multiHopRoutes) {
  console.log(`  Hop: pool=${hop.poolId} -> ${hop.tokenOutDenom.slice(0, 20)}...`);
}
console.log();
console.log("=== Osmosis: Split Route (5 OSMO) ===");
console.log(`  Split route bytes (${splitRouteBytes.length} B): ${Buffer.from(splitRouteBytes).toString("hex")}`);
console.log(`  Token in amount: ${splitRoute.tokenInAmount} uosmo`);
console.log();
console.log(`  MsgSwap type_url: ${msgTypeUrl}`);
console.log("  To broadcast: encode the full MsgSwapExactAmountIn, wrap in TxBody, sign, and POST to an Osmosis node.");
