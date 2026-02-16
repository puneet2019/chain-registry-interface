// Auto-generated lib.rs -- do not edit manually

pub mod amino {
    include!("../amino/amino.rs");
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
pub mod packetforward {
    pub mod v1 {
        include!("../packetforward/v1/packetforward.v1.rs");
    }
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
    pub mod types {
        include!("../tendermint/types/tendermint.types.rs");
    }
}
