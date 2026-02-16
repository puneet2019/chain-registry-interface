//! Example: Constructing Cosmos transactions using prost (protobuf).
//!
//! Demonstrates building a CosmosHub bank send and an Osmosis swap
//! using the same protobuf structures as the generated types in proto/cosmoshub/rust/v25.2.0/.
//!
//! This is a serialization example — broadcasting requires a live node
//! and signing keys.

use prost::Message;

// --- Proto message definitions ---
// These mirror the generated types in proto/cosmoshub/rust/v25.2.0/.
// In production, include the generated .rs files directly or use a build.rs
// that compiles the protos.

/// cosmos.base.v1beta1.Coin
/// See: proto/cosmoshub/rust/v25.2.0/cosmoshub/v25.2.0/cosmos/base/v1beta1/cosmos.base.v1beta1.rs
#[derive(Clone, PartialEq, Message)]
pub struct Coin {
    #[prost(string, tag = "1")]
    pub denom: String,
    #[prost(string, tag = "2")]
    pub amount: String,
}

/// cosmos.bank.v1beta1.MsgSend
/// See: proto/cosmoshub/raw/v25.2.0/protos/cosmoshub/v25.2.0/protos/cosmos/bank/v1beta1/tx.proto
#[derive(Clone, PartialEq, Message)]
pub struct MsgSend {
    #[prost(string, tag = "1")]
    pub from_address: String,
    #[prost(string, tag = "2")]
    pub to_address: String,
    #[prost(message, repeated, tag = "3")]
    pub amount: Vec<Coin>,
}

/// google.protobuf.Any — universal message envelope
#[derive(Clone, PartialEq, Message)]
pub struct Any {
    #[prost(string, tag = "1")]
    pub type_url: String,
    #[prost(bytes = "vec", tag = "2")]
    pub value: Vec<u8>,
}

/// cosmos.tx.v1beta1.TxBody
/// See: proto/cosmoshub/rust/v25.2.0/cosmoshub/v25.2.0/cosmos/tx/v1beta1/cosmos.tx.v1beta1.rs
#[derive(Clone, PartialEq, Message)]
pub struct TxBody {
    #[prost(message, repeated, tag = "1")]
    pub messages: Vec<Any>,
    #[prost(string, tag = "2")]
    pub memo: String,
    #[prost(uint64, tag = "3")]
    pub timeout_height: u64,
}

/// cosmos.tx.v1beta1.Fee
#[derive(Clone, PartialEq, Message)]
pub struct Fee {
    #[prost(message, repeated, tag = "1")]
    pub amount: Vec<Coin>,
    #[prost(uint64, tag = "2")]
    pub gas_limit: u64,
}

/// cosmos.tx.v1beta1.AuthInfo (simplified — real one includes signer_infos)
#[derive(Clone, PartialEq, Message)]
pub struct AuthInfo {
    #[prost(message, optional, tag = "2")]
    pub fee: Option<Fee>,
}

/// cosmos.tx.v1beta1.SignDoc
#[derive(Clone, PartialEq, Message)]
pub struct SignDoc {
    #[prost(bytes = "vec", tag = "1")]
    pub body_bytes: Vec<u8>,
    #[prost(bytes = "vec", tag = "2")]
    pub auth_info_bytes: Vec<u8>,
    #[prost(string, tag = "3")]
    pub chain_id: String,
    #[prost(uint64, tag = "4")]
    pub account_number: u64,
}

/// cosmos.tx.v1beta1.TxRaw — the broadcast payload
#[derive(Clone, PartialEq, Message)]
pub struct TxRaw {
    #[prost(bytes = "vec", tag = "1")]
    pub body_bytes: Vec<u8>,
    #[prost(bytes = "vec", tag = "2")]
    pub auth_info_bytes: Vec<u8>,
    #[prost(bytes = "vec", repeated, tag = "3")]
    pub signatures: Vec<Vec<u8>>,
}

/// osmosis.poolmanager.v1beta1.SwapAmountInRoute
/// See: proto/osmosis/rust/v31.0.0/osmosis/poolmanager/v1beta1/osmosis.poolmanager.v1beta1.rs
#[derive(Clone, PartialEq, Message)]
pub struct SwapAmountInRoute {
    #[prost(uint64, tag = "1")]
    pub pool_id: u64,
    #[prost(string, tag = "2")]
    pub token_out_denom: String,
}

/// osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn
/// See: proto/osmosis/raw/v31.0.0/protos/osmosis/poolmanager/v1beta1/tx.proto
#[derive(Clone, PartialEq, Message)]
pub struct MsgSwapExactAmountIn {
    #[prost(string, tag = "1")]
    pub sender: String,
    #[prost(message, repeated, tag = "2")]
    pub routes: Vec<SwapAmountInRoute>,
    #[prost(message, optional, tag = "3")]
    pub token_in: Option<Coin>,
    #[prost(string, tag = "4")]
    pub token_out_min_amount: String,
}

// --- Examples ---

fn cosmoshub_bank_send() {
    println!("=== CosmosHub: Bank Send (1 ATOM) ===");

    // 1. Build MsgSend
    let msg = MsgSend {
        from_address: "cosmos1qypqxpq9qcrsszg2pvxq6rs0zqg3yyc5lzv7xu".into(),
        to_address: "cosmos1r5v5srda7xfth3hn2s26txvrcrntldjumt8mhl".into(),
        amount: vec![Coin {
            denom: "uatom".into(),
            amount: "1000000".into(), // 1 ATOM
        }],
    };

    // 2. Encode and wrap in Any
    let msg_bytes = msg.encode_to_vec();
    let msg_any = Any {
        type_url: "/cosmos.bank.v1beta1.MsgSend".into(),
        value: msg_bytes,
    };

    // 3. Build TxBody
    let tx_body = TxBody {
        messages: vec![msg_any.clone()],
        memo: "sent via proto-registry example".into(),
        timeout_height: 0,
    };

    // 4. Build AuthInfo
    let auth_info = AuthInfo {
        fee: Some(Fee {
            amount: vec![Coin {
                denom: "uatom".into(),
                amount: "5000".into(),
            }],
            gas_limit: 200_000,
        }),
    };

    // 5. Serialize
    let body_bytes = tx_body.encode_to_vec();
    let auth_info_bytes = auth_info.encode_to_vec();

    let sign_doc = SignDoc {
        body_bytes: body_bytes.clone(),
        auth_info_bytes: auth_info_bytes.clone(),
        chain_id: "cosmoshub-4".into(),
        account_number: 12345,
    };
    let sign_doc_bytes = sign_doc.encode_to_vec();

    // 6. Build TxRaw (broadcast payload)
    let tx_raw = TxRaw {
        body_bytes,
        auth_info_bytes,
        signatures: vec![b"placeholder-sig".to_vec()],
    };
    let tx_raw_bytes = tx_raw.encode_to_vec();

    println!(
        "  MsgSend type_url : {}",
        msg_any.type_url
    );
    println!(
        "  SignDoc  ({:3} B)  : {}...",
        sign_doc_bytes.len(),
        hex::encode(&sign_doc_bytes[..sign_doc_bytes.len().min(32)])
    );
    println!(
        "  TxRaw   ({:3} B)  : {}...",
        tx_raw_bytes.len(),
        hex::encode(&tx_raw_bytes[..tx_raw_bytes.len().min(32)])
    );
    println!();
}

fn osmosis_swap() {
    println!("=== Osmosis: Swap 5 OSMO -> ATOM via Pool 1 ===");

    // 1. Build the swap message
    let msg = MsgSwapExactAmountIn {
        sender: "osmo1qypqxpq9qcrsszg2pvxq6rs0zqg3yyc5lzv7xu".into(),
        routes: vec![SwapAmountInRoute {
            pool_id: 1,
            token_out_denom:
                "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2".into(),
        }],
        token_in: Some(Coin {
            denom: "uosmo".into(),
            amount: "5000000".into(), // 5 OSMO
        }),
        token_out_min_amount: "100000".into(), // slippage protection
    };

    // 2. Encode and wrap in Any
    let msg_bytes = msg.encode_to_vec();
    let msg_any = Any {
        type_url: "/osmosis.poolmanager.v1beta1.MsgSwapExactAmountIn".into(),
        value: msg_bytes,
    };

    // 3. Build transaction
    let tx_body = TxBody {
        messages: vec![msg_any.clone()],
        memo: "swap via proto-registry example".into(),
        timeout_height: 0,
    };

    let auth_info = AuthInfo {
        fee: Some(Fee {
            amount: vec![Coin {
                denom: "uosmo".into(),
                amount: "12500".into(),
            }],
            gas_limit: 500_000,
        }),
    };

    let body_bytes = tx_body.encode_to_vec();
    let auth_info_bytes = auth_info.encode_to_vec();

    let tx_raw = TxRaw {
        body_bytes,
        auth_info_bytes,
        signatures: vec![b"placeholder-sig".to_vec()],
    };
    let tx_raw_bytes = tx_raw.encode_to_vec();

    println!(
        "  Route: pool={} -> {}...",
        msg.routes[0].pool_id,
        &msg.routes[0].token_out_denom[..20]
    );
    println!("  MsgSwap type_url : {}", msg_any.type_url);
    println!(
        "  TxRaw   ({:3} B)  : {}...",
        tx_raw_bytes.len(),
        hex::encode(&tx_raw_bytes[..tx_raw_bytes.len().min(32)])
    );
    println!();
}

fn main() {
    cosmoshub_bank_send();
    osmosis_swap();
    println!("Done. Broadcasting requires a live node, signing keys, and correct account/sequence.");
}
