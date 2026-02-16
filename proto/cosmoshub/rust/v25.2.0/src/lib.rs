// Auto-generated lib.rs -- do not edit manually

pub mod amino {
    include!("../amino/amino.rs");
}
pub mod cel {
    pub mod expr {
        include!("../cel/expr/cel.expr.rs");
        pub mod conformance {
            pub mod proto2 {
                include!("../cel/expr/conformance/proto2/cel.expr.conformance.proto2.rs");
            }
            pub mod proto3 {
                include!("../cel/expr/conformance/proto3/cel.expr.conformance.proto3.rs");
            }
        }
    }
}
pub mod cosmos {
    pub mod app {
        pub mod runtime {
            pub mod v1alpha1 {
                include!("../cosmos/app/runtime/v1alpha1/cosmos.app.runtime.v1alpha1.rs");
            }
        }
        pub mod v1alpha1 {
            include!("../cosmos/app/v1alpha1/cosmos.app.v1alpha1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/app/v1alpha1/cosmos.app.v1alpha1.tonic.rs");
        }
    }
    pub mod auth {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/auth/module/v1/cosmos.auth.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/auth/v1beta1/cosmos.auth.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/auth/v1beta1/cosmos.auth.v1beta1.tonic.rs");
        }
    }
    pub mod authz {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/authz/module/v1/cosmos.authz.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/authz/v1beta1/cosmos.authz.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/authz/v1beta1/cosmos.authz.v1beta1.tonic.rs");
        }
    }
    pub mod autocli {
        pub mod v1 {
            include!("../cosmos/autocli/v1/cosmos.autocli.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/autocli/v1/cosmos.autocli.v1.tonic.rs");
        }
    }
    pub mod bank {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/bank/module/v1/cosmos.bank.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/bank/v1beta1/cosmos.bank.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/bank/v1beta1/cosmos.bank.v1beta1.tonic.rs");
        }
    }
    pub mod base {
        pub mod abci {
            pub mod v1beta1 {
                include!("../cosmos/base/abci/v1beta1/cosmos.base.abci.v1beta1.rs");
            }
        }
        pub mod node {
            pub mod v1beta1 {
                include!("../cosmos/base/node/v1beta1/cosmos.base.node.v1beta1.rs");
                #[cfg(feature = "grpc")]
                include!("../cosmos/base/node/v1beta1/cosmos.base.node.v1beta1.tonic.rs");
            }
        }
        pub mod query {
            pub mod v1beta1 {
                include!("../cosmos/base/query/v1beta1/cosmos.base.query.v1beta1.rs");
            }
        }
        pub mod reflection {
            pub mod v1beta1 {
                include!("../cosmos/base/reflection/v1beta1/cosmos.base.reflection.v1beta1.rs");
                #[cfg(feature = "grpc")]
                include!("../cosmos/base/reflection/v1beta1/cosmos.base.reflection.v1beta1.tonic.rs");
            }
            pub mod v2alpha1 {
                include!("../cosmos/base/reflection/v2alpha1/cosmos.base.reflection.v2alpha1.rs");
                #[cfg(feature = "grpc")]
                include!("../cosmos/base/reflection/v2alpha1/cosmos.base.reflection.v2alpha1.tonic.rs");
            }
        }
        pub mod tendermint {
            pub mod v1beta1 {
                include!("../cosmos/base/tendermint/v1beta1/cosmos.base.tendermint.v1beta1.rs");
                #[cfg(feature = "grpc")]
                include!("../cosmos/base/tendermint/v1beta1/cosmos.base.tendermint.v1beta1.tonic.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/base/v1beta1/cosmos.base.v1beta1.rs");
        }
    }
    pub mod benchmark {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/benchmark/module/v1/cosmos.benchmark.module.v1.rs");
            }
        }
        pub mod v1 {
            include!("../cosmos/benchmark/v1/cosmos.benchmark.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/benchmark/v1/cosmos.benchmark.v1.tonic.rs");
        }
    }
    pub mod circuit {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/circuit/module/v1/cosmos.circuit.module.v1.rs");
            }
        }
        pub mod v1 {
            include!("../cosmos/circuit/v1/cosmos.circuit.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/circuit/v1/cosmos.circuit.v1.tonic.rs");
        }
    }
    pub mod consensus {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/consensus/module/v1/cosmos.consensus.module.v1.rs");
            }
        }
        pub mod v1 {
            include!("../cosmos/consensus/v1/cosmos.consensus.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/consensus/v1/cosmos.consensus.v1.tonic.rs");
        }
    }
    pub mod counter {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/counter/module/v1/cosmos.counter.module.v1.rs");
            }
        }
        pub mod v1 {
            include!("../cosmos/counter/v1/cosmos.counter.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/counter/v1/cosmos.counter.v1.tonic.rs");
        }
    }
    pub mod crisis {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/crisis/module/v1/cosmos.crisis.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/crisis/v1beta1/cosmos.crisis.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/crisis/v1beta1/cosmos.crisis.v1beta1.tonic.rs");
        }
    }
    pub mod crypto {
        pub mod ed25519 {
            include!("../cosmos/crypto/ed25519/cosmos.crypto.ed25519.rs");
        }
        pub mod hd {
            pub mod v1 {
                include!("../cosmos/crypto/hd/v1/cosmos.crypto.hd.v1.rs");
            }
        }
        pub mod keyring {
            pub mod v1 {
                include!("../cosmos/crypto/keyring/v1/cosmos.crypto.keyring.v1.rs");
            }
        }
        pub mod multisig {
            include!("../cosmos/crypto/multisig/cosmos.crypto.multisig.rs");
            pub mod v1beta1 {
                include!("../cosmos/crypto/multisig/v1beta1/cosmos.crypto.multisig.v1beta1.rs");
            }
        }
        pub mod secp256k1 {
            include!("../cosmos/crypto/secp256k1/cosmos.crypto.secp256k1.rs");
        }
        pub mod secp256r1 {
            include!("../cosmos/crypto/secp256r1/cosmos.crypto.secp256r1.rs");
        }
    }
    pub mod distribution {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/distribution/module/v1/cosmos.distribution.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/distribution/v1beta1/cosmos.distribution.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/distribution/v1beta1/cosmos.distribution.v1beta1.tonic.rs");
        }
    }
    pub mod epochs {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/epochs/module/v1/cosmos.epochs.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/epochs/v1beta1/cosmos.epochs.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/epochs/v1beta1/cosmos.epochs.v1beta1.tonic.rs");
        }
    }
    pub mod evidence {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/evidence/module/v1/cosmos.evidence.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/evidence/v1beta1/cosmos.evidence.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/evidence/v1beta1/cosmos.evidence.v1beta1.tonic.rs");
        }
    }
    pub mod feegrant {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/feegrant/module/v1/cosmos.feegrant.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/feegrant/v1beta1/cosmos.feegrant.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/feegrant/v1beta1/cosmos.feegrant.v1beta1.tonic.rs");
        }
    }
    pub mod genutil {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/genutil/module/v1/cosmos.genutil.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/genutil/v1beta1/cosmos.genutil.v1beta1.rs");
        }
    }
    pub mod gov {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/gov/module/v1/cosmos.gov.module.v1.rs");
            }
        }
        pub mod v1 {
            include!("../cosmos/gov/v1/cosmos.gov.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/gov/v1/cosmos.gov.v1.tonic.rs");
        }
        pub mod v1beta1 {
            include!("../cosmos/gov/v1beta1/cosmos.gov.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/gov/v1beta1/cosmos.gov.v1beta1.tonic.rs");
        }
    }
    pub mod group {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/group/module/v1/cosmos.group.module.v1.rs");
            }
        }
        pub mod v1 {
            include!("../cosmos/group/v1/cosmos.group.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/group/v1/cosmos.group.v1.tonic.rs");
        }
    }
    pub mod mint {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/mint/module/v1/cosmos.mint.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/mint/v1beta1/cosmos.mint.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/mint/v1beta1/cosmos.mint.v1beta1.tonic.rs");
        }
    }
    pub mod msg {
        pub mod textual {
            pub mod v1 {
                include!("../cosmos/msg/textual/v1/cosmos.msg.textual.v1.rs");
            }
        }
        pub mod v1 {
            include!("../cosmos/msg/v1/cosmos.msg.v1.rs");
        }
    }
    pub mod nft {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/nft/module/v1/cosmos.nft.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/nft/v1beta1/cosmos.nft.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/nft/v1beta1/cosmos.nft.v1beta1.tonic.rs");
        }
    }
    pub mod params {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/params/module/v1/cosmos.params.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/params/v1beta1/cosmos.params.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/params/v1beta1/cosmos.params.v1beta1.tonic.rs");
        }
    }
    pub mod protocolpool {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/protocolpool/module/v1/cosmos.protocolpool.module.v1.rs");
            }
        }
        pub mod v1 {
            include!("../cosmos/protocolpool/v1/cosmos.protocolpool.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/protocolpool/v1/cosmos.protocolpool.v1.tonic.rs");
        }
    }
    pub mod query {
        pub mod v1 {
            include!("../cosmos/query/v1/cosmos.query.v1.rs");
        }
    }
    pub mod reflection {
        pub mod v1 {
            include!("../cosmos/reflection/v1/cosmos.reflection.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/reflection/v1/cosmos.reflection.v1.tonic.rs");
        }
    }
    pub mod slashing {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/slashing/module/v1/cosmos.slashing.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/slashing/v1beta1/cosmos.slashing.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/slashing/v1beta1/cosmos.slashing.v1beta1.tonic.rs");
        }
    }
    pub mod staking {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/staking/module/v1/cosmos.staking.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/staking/v1beta1/cosmos.staking.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/staking/v1beta1/cosmos.staking.v1beta1.tonic.rs");
        }
    }
    pub mod store {
        pub mod internal {
            pub mod kv {
                pub mod v1beta1 {
                    include!("../cosmos/store/internal/kv/v1beta1/cosmos.store.internal.kv.v1beta1.rs");
                }
            }
        }
        pub mod snapshots {
            pub mod v1 {
                include!("../cosmos/store/snapshots/v1/cosmos.store.snapshots.v1.rs");
            }
        }
        pub mod streaming {
            pub mod abci {
                include!("../cosmos/store/streaming/abci/cosmos.store.streaming.abci.rs");
                #[cfg(feature = "grpc")]
                include!("../cosmos/store/streaming/abci/cosmos.store.streaming.abci.tonic.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/store/v1beta1/cosmos.store.v1beta1.rs");
        }
    }
    pub mod tx {
        pub mod config {
            pub mod v1 {
                include!("../cosmos/tx/config/v1/cosmos.tx.config.v1.rs");
            }
        }
        pub mod signing {
            pub mod v1beta1 {
                include!("../cosmos/tx/signing/v1beta1/cosmos.tx.signing.v1beta1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/tx/v1beta1/cosmos.tx.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/tx/v1beta1/cosmos.tx.v1beta1.tonic.rs");
        }
    }
    pub mod upgrade {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/upgrade/module/v1/cosmos.upgrade.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/upgrade/v1beta1/cosmos.upgrade.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/upgrade/v1beta1/cosmos.upgrade.v1beta1.tonic.rs");
        }
    }
    pub mod vesting {
        pub mod module {
            pub mod v1 {
                include!("../cosmos/vesting/module/v1/cosmos.vesting.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../cosmos/vesting/v1beta1/cosmos.vesting.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmos/vesting/v1beta1/cosmos.vesting.v1beta1.tonic.rs");
        }
    }
}
pub mod cosmos_proto {
    include!("../cosmos_proto/cosmos_proto.rs");
}
pub mod cosmwasm {
    pub mod wasm {
        pub mod v1 {
            include!("../cosmwasm/wasm/v1/cosmwasm.wasm.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../cosmwasm/wasm/v1/cosmwasm.wasm.v1.tonic.rs");
        }
    }
}
pub mod ethereum {
    pub mod eth {
        pub mod dbval {
            include!("../ethereum/eth/dbval/ethereum.eth.dbval.rs");
        }
        pub mod ext {
            include!("../ethereum/eth/ext/ethereum.eth.ext.rs");
        }
        pub mod v1 {
            include!("../ethereum/eth/v1/ethereum.eth.v1.rs");
        }
        pub mod v1alpha1 {
            include!("../ethereum/eth/v1alpha1/ethereum.eth.v1alpha1.rs");
            #[cfg(feature = "grpc")]
            include!("../ethereum/eth/v1alpha1/ethereum.eth.v1alpha1.tonic.rs");
        }
    }
}
pub mod feemarket {
    pub mod feemarket {
        pub mod module {
            pub mod v1 {
                include!("../feemarket/feemarket/module/v1/feemarket.feemarket.module.v1.rs");
            }
        }
        pub mod v1 {
            include!("../feemarket/feemarket/v1/feemarket.feemarket.v1.rs");
            #[cfg(feature = "grpc")]
            include!("../feemarket/feemarket/v1/feemarket.feemarket.v1.tonic.rs");
        }
    }
}
pub mod gaia {
    pub mod liquid {
        pub mod module {
            pub mod v1 {
                include!("../gaia/liquid/module/v1/gaia.liquid.module.v1.rs");
            }
        }
        pub mod v1beta1 {
            include!("../gaia/liquid/v1beta1/gaia.liquid.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../gaia/liquid/v1beta1/gaia.liquid.v1beta1.tonic.rs");
        }
    }
    pub mod metaprotocols {
        include!("../gaia/metaprotocols/gaia.metaprotocols.rs");
    }
}
pub mod gogoproto {
    include!("../gogoproto/gogoproto.rs");
}
pub mod google {
    pub mod api {
        include!("../google/api/google.api.rs");
    }
    pub mod protobuf {
        include!("../google/protobuf/google.protobuf.rs");
        pub mod compiler {
            include!("../google/protobuf/compiler/google.protobuf.compiler.rs");
        }
    }
}
pub mod iavl {
    include!("../iavl/iavl.rs");
}
pub mod ibc {
    pub mod applications {
        pub mod interchain_accounts {
            pub mod controller {
                pub mod v1 {
                    include!("../ibc/applications/interchain_accounts/controller/v1/ibc.applications.interchain_accounts.controller.v1.rs");
                    #[cfg(feature = "grpc")]
                    include!("../ibc/applications/interchain_accounts/controller/v1/ibc.applications.interchain_accounts.controller.v1.tonic.rs");
                }
            }
            pub mod genesis {
                pub mod v1 {
                    include!("../ibc/applications/interchain_accounts/genesis/v1/ibc.applications.interchain_accounts.genesis.v1.rs");
                }
            }
            pub mod host {
                pub mod v1 {
                    include!("../ibc/applications/interchain_accounts/host/v1/ibc.applications.interchain_accounts.host.v1.rs");
                    #[cfg(feature = "grpc")]
                    include!("../ibc/applications/interchain_accounts/host/v1/ibc.applications.interchain_accounts.host.v1.tonic.rs");
                }
            }
            pub mod v1 {
                include!("../ibc/applications/interchain_accounts/v1/ibc.applications.interchain_accounts.v1.rs");
            }
        }
        pub mod transfer {
            pub mod v1 {
                include!("../ibc/applications/transfer/v1/ibc.applications.transfer.v1.rs");
                #[cfg(feature = "grpc")]
                include!("../ibc/applications/transfer/v1/ibc.applications.transfer.v1.tonic.rs");
            }
        }
    }
    pub mod core {
        pub mod channel {
            pub mod v1 {
                include!("../ibc/core/channel/v1/ibc.core.channel.v1.rs");
                #[cfg(feature = "grpc")]
                include!("../ibc/core/channel/v1/ibc.core.channel.v1.tonic.rs");
            }
            pub mod v2 {
                include!("../ibc/core/channel/v2/ibc.core.channel.v2.rs");
                #[cfg(feature = "grpc")]
                include!("../ibc/core/channel/v2/ibc.core.channel.v2.tonic.rs");
            }
        }
        pub mod client {
            pub mod v1 {
                include!("../ibc/core/client/v1/ibc.core.client.v1.rs");
                #[cfg(feature = "grpc")]
                include!("../ibc/core/client/v1/ibc.core.client.v1.tonic.rs");
            }
            pub mod v2 {
                include!("../ibc/core/client/v2/ibc.core.client.v2.rs");
                #[cfg(feature = "grpc")]
                include!("../ibc/core/client/v2/ibc.core.client.v2.tonic.rs");
            }
        }
        pub mod commitment {
            pub mod v2 {
                include!("../ibc/core/commitment/v2/ibc.core.commitment.v2.rs");
            }
        }
    }
    pub mod lightclients {
        pub mod solomachine {
            pub mod v3 {
                include!("../ibc/lightclients/solomachine/v3/ibc.lightclients.solomachine.v3.rs");
            }
        }
        pub mod wasm {
            pub mod v1 {
                include!("../ibc/lightclients/wasm/v1/ibc.lightclients.wasm.v1.rs");
                #[cfg(feature = "grpc")]
                include!("../ibc/lightclients/wasm/v1/ibc.lightclients.wasm.v1.tonic.rs");
            }
        }
    }
}
pub mod interchain_security {
    pub mod ccv {
        pub mod consumer {
            pub mod v1 {
                include!("../interchain_security/ccv/consumer/v1/interchain_security.ccv.consumer.v1.rs");
            }
        }
        pub mod v1 {
            include!("../interchain_security/ccv/v1/interchain_security.ccv.v1.rs");
        }
    }
}
pub mod packetforward {
    pub mod v1 {
        include!("../packetforward/v1/packetforward.v1.rs");
    }
}
pub mod perftools {
    pub mod profiles {
        include!("../perftools/profiles/perftools.profiles.rs");
    }
}
pub mod proto {
    include!("../proto/proto.rs");
}
pub mod proto3_proto {
    include!("../proto3_proto/proto3_proto.rs");
}
pub mod ratelimit {
    pub mod module {
        pub mod v1 {
            include!("../ratelimit/module/v1/ratelimit.module.v1.rs");
        }
    }
    pub mod v1 {
        include!("../ratelimit/v1/ratelimit.v1.rs");
        #[cfg(feature = "grpc")]
        include!("../ratelimit/v1/ratelimit.v1.tonic.rs");
    }
}
pub mod tendermint {
    pub mod abci {
        include!("../tendermint/abci/tendermint.abci.rs");
        #[cfg(feature = "grpc")]
        include!("../tendermint/abci/tendermint.abci.tonic.rs");
    }
    pub mod blocksync {
        include!("../tendermint/blocksync/tendermint.blocksync.rs");
    }
    pub mod consensus {
        include!("../tendermint/consensus/tendermint.consensus.rs");
    }
    pub mod crypto {
        include!("../tendermint/crypto/tendermint.crypto.rs");
    }
    pub mod libs {
        pub mod bits {
            include!("../tendermint/libs/bits/tendermint.libs.bits.rs");
        }
    }
    pub mod mempool {
        include!("../tendermint/mempool/tendermint.mempool.rs");
    }
    pub mod p2p {
        include!("../tendermint/p2p/tendermint.p2p.rs");
    }
    pub mod privval {
        include!("../tendermint/privval/tendermint.privval.rs");
    }
    pub mod rpc {
        pub mod grpc {
            include!("../tendermint/rpc/grpc/tendermint.rpc.grpc.rs");
            #[cfg(feature = "grpc")]
            include!("../tendermint/rpc/grpc/tendermint.rpc.grpc.tonic.rs");
        }
    }
    pub mod state {
        include!("../tendermint/state/tendermint.state.rs");
    }
    pub mod statesync {
        include!("../tendermint/statesync/tendermint.statesync.rs");
    }
    pub mod store {
        include!("../tendermint/store/tendermint.store.rs");
    }
    pub mod types {
        include!("../tendermint/types/tendermint.types.rs");
    }
    pub mod version {
        include!("../tendermint/version/tendermint.version.rs");
    }
}
pub mod test_proto {
    include!("../test_proto/test_proto.rs");
}
pub mod testing {
    include!("../testing/testing.rs");
}
pub mod zipkin {
    pub mod proto3 {
        include!("../zipkin/proto3/zipkin.proto3.rs");
    }
    pub mod testing {
        include!("../zipkin/testing/zipkin.testing.rs");
        #[cfg(feature = "grpc")]
        include!("../zipkin/testing/zipkin.testing.tonic.rs");
    }
}
