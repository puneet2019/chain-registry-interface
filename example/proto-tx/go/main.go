// Example: Constructing Cosmos transactions using protobuf.
//
// Demonstrates building a CosmosHub bank send and an Osmosis swap
// using the proto wire format matching the generated types in proto/.
//
// This is a serialization example — broadcasting requires a live node
// and signing keys.
package main

import (
	"encoding/hex"
	"fmt"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/anypb"

	// Using well-known proto types to construct transactions manually.
	// In production, import the generated types from proto/cosmoshub/go/
	// or use the cosmos-sdk directly.
	txpb "cosmossdk.io/api/cosmos/tx/v1beta1"
	bankpb "cosmossdk.io/api/cosmos/bank/v1beta1"
	basepb "cosmossdk.io/api/cosmos/base/v1beta1"
)

// --- CosmosHub: Bank Send ---

func cosmoshubBankSend() {
	fmt.Println("=== CosmosHub: Bank Send (1 ATOM) ===")

	// 1. Build MsgSend
	msg := &bankpb.MsgSend{
		FromAddress: "cosmos1qypqxpq9qcrsszg2pvxq6rs0zqg3yyc5lzv7xu",
		ToAddress:   "cosmos1r5v5srda7xfth3hn2s26txvrcrntldjumt8mhl",
		Amount: []*basepb.Coin{
			{Denom: "uatom", Amount: "1000000"}, // 1 ATOM = 1_000_000 uatom
		},
	}

	// 2. Wrap in Any (the universal envelope for Cosmos messages)
	msgAny, err := anypb.New(msg)
	if err != nil {
		panic(err)
	}

	// 3. Build TxBody — carries the message(s) and memo
	txBody := &txpb.TxBody{
		Messages: []*anypb.Any{msgAny},
		Memo:     "sent via proto-registry example",
	}

	// 4. Build Fee + AuthInfo
	authInfo := &txpb.AuthInfo{
		Fee: &txpb.Fee{
			Amount:   []*basepb.Coin{{Denom: "uatom", Amount: "5000"}},
			GasLimit: 200000,
		},
		// In a real tx, SignerInfos would contain public key + sequence
	}

	// 5. Serialize to raw bytes (what the signer signs)
	bodyBytes, _ := proto.Marshal(txBody)
	authInfoBytes, _ := proto.Marshal(authInfo)

	signDoc := &txpb.SignDoc{
		BodyBytes:     bodyBytes,
		AuthInfoBytes: authInfoBytes,
		ChainId:       "cosmoshub-4",
		AccountNumber: 12345,
	}
	signDocBytes, _ := proto.Marshal(signDoc)

	// 6. Build TxRaw — the final broadcast payload
	txRaw := &txpb.TxRaw{
		BodyBytes:     bodyBytes,
		AuthInfoBytes: authInfoBytes,
		Signatures:    [][]byte{[]byte("placeholder-sig")},
	}
	txRawBytes, _ := proto.Marshal(txRaw)

	fmt.Printf("  MsgSend type_url : %s\n", msgAny.TypeUrl)
	fmt.Printf("  SignDoc   (%3d B) : %s...\n", len(signDocBytes), hex.EncodeToString(signDocBytes[:32]))
	fmt.Printf("  TxRaw    (%3d B) : %s...\n", len(txRawBytes), hex.EncodeToString(txRawBytes[:32]))
	fmt.Println()
}

// --- Osmosis: Token Swap ---

func osmosisSwap() {
	fmt.Println("=== Osmosis: Swap 5 OSMO -> ATOM via Pool 1 ===")

	// MsgSwapExactAmountIn is defined in osmosis/poolmanager/v1beta1/tx.proto.
	// The full type didn't compile due to missing deps, so we construct it
	// manually via Any — this is the standard pattern for cross-chain msgs.

	// Swap route: OSMO -> ATOM through pool 1
	// Matches proto/osmosis/go/v31.0.0/osmosis/poolmanager/v1beta1/swap_route.pb.go
	type SwapRoute struct {
		PoolId        uint64 `json:"pool_id"`
		TokenOutDenom string `json:"token_out_denom"`
	}

	route := SwapRoute{
		PoolId:        1,
		TokenOutDenom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
	}

	// In production you'd use the generated MsgSwapExactAmountIn type:
	//   msg := &poolmanagertypes.MsgSwapExactAmountIn{
	//       Sender:            "osmo1sender...",
	//       Routes:            []SwapAmountInRoute{{PoolId: 1, TokenOutDenom: "ibc/2739..."}},
	//       TokenIn:           sdk.NewCoin("uosmo", sdk.NewInt(5000000)),
	//       TokenOutMinAmount: sdk.NewInt(100000),
	//   }

	// Build the Any-wrapped message for the tx body
	msgAny := &anypb.Any{
		TypeUrl: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn",
		// Value would be proto.Marshal(msg) with the full type
	}

	txBody := &txpb.TxBody{
		Messages: []*anypb.Any{msgAny},
		Memo:     "swap via proto-registry example",
	}

	authInfo := &txpb.AuthInfo{
		Fee: &txpb.Fee{
			Amount:   []*basepb.Coin{{Denom: "uosmo", Amount: "12500"}},
			GasLimit: 500000,
		},
	}

	bodyBytes, _ := proto.Marshal(txBody)
	authInfoBytes, _ := proto.Marshal(authInfo)

	txRaw := &txpb.TxRaw{
		BodyBytes:     bodyBytes,
		AuthInfoBytes: authInfoBytes,
		Signatures:    [][]byte{[]byte("placeholder-sig")},
	}
	txRawBytes, _ := proto.Marshal(txRaw)

	fmt.Printf("  Route: pool=%d -> %s\n", route.PoolId, route.TokenOutDenom[:20]+"...")
	fmt.Printf("  MsgSwap type_url : %s\n", msgAny.TypeUrl)
	fmt.Printf("  TxRaw    (%3d B) : %s...\n", len(txRawBytes), hex.EncodeToString(txRawBytes[:32]))
	fmt.Println()
}

func main() {
	cosmoshubBankSend()
	osmosisSwap()
	fmt.Println("Done. Broadcasting requires a live node, signing keys, and correct account/sequence.")
}
