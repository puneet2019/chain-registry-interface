// @generated
// This file is auto-generated. Do not edit manually.

pub mod amino {
    include!("../amino/amino.rs");
}
pub mod cosmos_proto {
    include!("../cosmos_proto/cosmos_proto.rs");
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
pub mod osmosis {
    pub mod concentratedliquidity {
        include!("../osmosis/concentratedliquidity/osmosis.concentratedliquidity.rs");
        pub mod v1beta1 {
            include!("../osmosis/concentratedliquidity/v1beta1/osmosis.concentratedliquidity.v1beta1.rs");
        }
    }
    pub mod cosmwasmpool {
        pub mod v1beta1 {
            include!("../osmosis/cosmwasmpool/v1beta1/osmosis.cosmwasmpool.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../osmosis/cosmwasmpool/v1beta1/osmosis.cosmwasmpool.v1beta1.tonic.rs");
        }
    }
    pub mod downtimedetector {
        pub mod v1beta1 {
            include!("../osmosis/downtimedetector/v1beta1/osmosis.downtimedetector.v1beta1.rs");
        }
    }
    pub mod epochs {
        pub mod v1beta1 {
            include!("../osmosis/epochs/v1beta1/osmosis.epochs.v1beta1.rs");
        }
    }
    pub mod ibchooks {
        include!("../osmosis/ibchooks/osmosis.ibchooks.rs");
    }
    pub mod ibcratelimit {
        pub mod v1beta1 {
            include!("../osmosis/ibcratelimit/v1beta1/osmosis.ibcratelimit.v1beta1.rs");
        }
    }
    pub mod ingest {
        pub mod v1beta1 {
            include!("../osmosis/ingest/v1beta1/osmosis.ingest.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../osmosis/ingest/v1beta1/osmosis.ingest.v1beta1.tonic.rs");
        }
    }
    pub mod lockup {
        include!("../osmosis/lockup/osmosis.lockup.rs");
    }
    pub mod mint {
        pub mod v1beta1 {
            include!("../osmosis/mint/v1beta1/osmosis.mint.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../osmosis/mint/v1beta1/osmosis.mint.v1beta1.tonic.rs");
        }
    }
    pub mod poolincentives {
        pub mod v1beta1 {
            include!("../osmosis/poolincentives/v1beta1/osmosis.poolincentives.v1beta1.rs");
        }
    }
    pub mod poolmanager {
        pub mod v1beta1 {
            include!("../osmosis/poolmanager/v1beta1/osmosis.poolmanager.v1beta1.rs");
        }
        pub mod v2 {
            include!("../osmosis/poolmanager/v2/osmosis.poolmanager.v2.rs");
            #[cfg(feature = "grpc")]
            include!("../osmosis/poolmanager/v2/osmosis.poolmanager.v2.tonic.rs");
        }
    }
    pub mod protorev {
        pub mod v1beta1 {
            include!("../osmosis/protorev/v1beta1/osmosis.protorev.v1beta1.rs");
        }
    }
    pub mod smartaccount {
        pub mod v1beta1 {
            include!("../osmosis/smartaccount/v1beta1/osmosis.smartaccount.v1beta1.rs");
        }
    }
    pub mod superfluid {
        include!("../osmosis/superfluid/osmosis.superfluid.rs");
    }
    pub mod twap {
        pub mod v1beta1 {
            include!("../osmosis/twap/v1beta1/osmosis.twap.v1beta1.rs");
        }
    }
    pub mod txfees {
        pub mod v1beta1 {
            include!("../osmosis/txfees/v1beta1/osmosis.txfees.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../osmosis/txfees/v1beta1/osmosis.txfees.v1beta1.tonic.rs");
        }
    }
    pub mod valsetpref {
        pub mod v1beta1 {
            include!("../osmosis/valsetpref/v1beta1/osmosis.valsetpref.v1beta1.rs");
            #[cfg(feature = "grpc")]
            include!("../osmosis/valsetpref/v1beta1/osmosis.valsetpref.v1beta1.tonic.rs");
        }
    }
}
