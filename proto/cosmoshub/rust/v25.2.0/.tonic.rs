// @generated
/// Generated client implementations.
pub mod spiffe_workload_api_client {
    #![allow(
        unused_variables,
        dead_code,
        missing_docs,
        clippy::wildcard_imports,
        clippy::let_unit_value,
    )]
    use tonic::codegen::*;
    use tonic::codegen::http::Uri;
    #[derive(Debug, Clone)]
    pub struct SpiffeWorkloadApiClient<T> {
        inner: tonic::client::Grpc<T>,
    }
    impl SpiffeWorkloadApiClient<tonic::transport::Channel> {
        /// Attempt to create a new client by connecting to a given endpoint.
        pub async fn connect<D>(dst: D) -> Result<Self, tonic::transport::Error>
        where
            D: TryInto<tonic::transport::Endpoint>,
            D::Error: Into<StdError>,
        {
            let conn = tonic::transport::Endpoint::new(dst)?.connect().await?;
            Ok(Self::new(conn))
        }
    }
    impl<T> SpiffeWorkloadApiClient<T>
    where
        T: tonic::client::GrpcService<tonic::body::Body>,
        T::Error: Into<StdError>,
        T::ResponseBody: Body<Data = Bytes> + std::marker::Send + 'static,
        <T::ResponseBody as Body>::Error: Into<StdError> + std::marker::Send,
    {
        pub fn new(inner: T) -> Self {
            let inner = tonic::client::Grpc::new(inner);
            Self { inner }
        }
        pub fn with_origin(inner: T, origin: Uri) -> Self {
            let inner = tonic::client::Grpc::with_origin(inner, origin);
            Self { inner }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> SpiffeWorkloadApiClient<InterceptedService<T, F>>
        where
            F: tonic::service::Interceptor,
            T::ResponseBody: Default,
            T: tonic::codegen::Service<
                http::Request<tonic::body::Body>,
                Response = http::Response<
                    <T as tonic::client::GrpcService<tonic::body::Body>>::ResponseBody,
                >,
            >,
            <T as tonic::codegen::Service<
                http::Request<tonic::body::Body>,
            >>::Error: Into<StdError> + std::marker::Send + std::marker::Sync,
        {
            SpiffeWorkloadApiClient::new(InterceptedService::new(inner, interceptor))
        }
        /// Compress requests with the given encoding.
        ///
        /// This requires the server to support it otherwise it might respond with an
        /// error.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.send_compressed(encoding);
            self
        }
        /// Enable decompressing responses.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.inner = self.inner.accept_compressed(encoding);
            self
        }
        /// Limits the maximum size of a decoded message.
        ///
        /// Default: `4MB`
        #[must_use]
        pub fn max_decoding_message_size(mut self, limit: usize) -> Self {
            self.inner = self.inner.max_decoding_message_size(limit);
            self
        }
        /// Limits the maximum size of an encoded message.
        ///
        /// Default: `usize::MAX`
        #[must_use]
        pub fn max_encoding_message_size(mut self, limit: usize) -> Self {
            self.inner = self.inner.max_encoding_message_size(limit);
            self
        }
        pub async fn fetch_x509svid(
            &mut self,
            request: impl tonic::IntoRequest<super::X509svidRequest>,
        ) -> std::result::Result<
            tonic::Response<tonic::codec::Streaming<super::X509svidResponse>>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/SpiffeWorkloadAPI/FetchX509SVID",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("SpiffeWorkloadAPI", "FetchX509SVID"));
            self.inner.server_streaming(req, path, codec).await
        }
        pub async fn fetch_x509_bundles(
            &mut self,
            request: impl tonic::IntoRequest<super::X509BundlesRequest>,
        ) -> std::result::Result<
            tonic::Response<tonic::codec::Streaming<super::X509BundlesResponse>>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/SpiffeWorkloadAPI/FetchX509Bundles",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("SpiffeWorkloadAPI", "FetchX509Bundles"));
            self.inner.server_streaming(req, path, codec).await
        }
        pub async fn fetch_jwtsvid(
            &mut self,
            request: impl tonic::IntoRequest<super::JwtsvidRequest>,
        ) -> std::result::Result<
            tonic::Response<super::JwtsvidResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/SpiffeWorkloadAPI/FetchJWTSVID",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("SpiffeWorkloadAPI", "FetchJWTSVID"));
            self.inner.unary(req, path, codec).await
        }
        pub async fn fetch_jwt_bundles(
            &mut self,
            request: impl tonic::IntoRequest<super::JwtBundlesRequest>,
        ) -> std::result::Result<
            tonic::Response<tonic::codec::Streaming<super::JwtBundlesResponse>>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/SpiffeWorkloadAPI/FetchJWTBundles",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("SpiffeWorkloadAPI", "FetchJWTBundles"));
            self.inner.server_streaming(req, path, codec).await
        }
        pub async fn validate_jwtsvid(
            &mut self,
            request: impl tonic::IntoRequest<super::ValidateJwtsvidRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ValidateJwtsvidResponse>,
            tonic::Status,
        > {
            self.inner
                .ready()
                .await
                .map_err(|e| {
                    tonic::Status::unknown(
                        format!("Service was not ready: {}", e.into()),
                    )
                })?;
            let codec = tonic_prost::ProstCodec::default();
            let path = http::uri::PathAndQuery::from_static(
                "/SpiffeWorkloadAPI/ValidateJWTSVID",
            );
            let mut req = request.into_request();
            req.extensions_mut()
                .insert(GrpcMethod::new("SpiffeWorkloadAPI", "ValidateJWTSVID"));
            self.inner.unary(req, path, codec).await
        }
    }
}
/// Generated server implementations.
pub mod spiffe_workload_api_server {
    #![allow(
        unused_variables,
        dead_code,
        missing_docs,
        clippy::wildcard_imports,
        clippy::let_unit_value,
    )]
    use tonic::codegen::*;
    /// Generated trait containing gRPC methods that should be implemented for use with SpiffeWorkloadApiServer.
    #[async_trait]
    pub trait SpiffeWorkloadApi: std::marker::Send + std::marker::Sync + 'static {
        /// Server streaming response type for the FetchX509SVID method.
        type FetchX509SVIDStream: tonic::codegen::tokio_stream::Stream<
                Item = std::result::Result<super::X509svidResponse, tonic::Status>,
            >
            + std::marker::Send
            + 'static;
        async fn fetch_x509svid(
            &self,
            request: tonic::Request<super::X509svidRequest>,
        ) -> std::result::Result<
            tonic::Response<Self::FetchX509SVIDStream>,
            tonic::Status,
        >;
        /// Server streaming response type for the FetchX509Bundles method.
        type FetchX509BundlesStream: tonic::codegen::tokio_stream::Stream<
                Item = std::result::Result<super::X509BundlesResponse, tonic::Status>,
            >
            + std::marker::Send
            + 'static;
        async fn fetch_x509_bundles(
            &self,
            request: tonic::Request<super::X509BundlesRequest>,
        ) -> std::result::Result<
            tonic::Response<Self::FetchX509BundlesStream>,
            tonic::Status,
        >;
        async fn fetch_jwtsvid(
            &self,
            request: tonic::Request<super::JwtsvidRequest>,
        ) -> std::result::Result<tonic::Response<super::JwtsvidResponse>, tonic::Status>;
        /// Server streaming response type for the FetchJWTBundles method.
        type FetchJWTBundlesStream: tonic::codegen::tokio_stream::Stream<
                Item = std::result::Result<super::JwtBundlesResponse, tonic::Status>,
            >
            + std::marker::Send
            + 'static;
        async fn fetch_jwt_bundles(
            &self,
            request: tonic::Request<super::JwtBundlesRequest>,
        ) -> std::result::Result<
            tonic::Response<Self::FetchJWTBundlesStream>,
            tonic::Status,
        >;
        async fn validate_jwtsvid(
            &self,
            request: tonic::Request<super::ValidateJwtsvidRequest>,
        ) -> std::result::Result<
            tonic::Response<super::ValidateJwtsvidResponse>,
            tonic::Status,
        >;
    }
    #[derive(Debug)]
    pub struct SpiffeWorkloadApiServer<T> {
        inner: Arc<T>,
        accept_compression_encodings: EnabledCompressionEncodings,
        send_compression_encodings: EnabledCompressionEncodings,
        max_decoding_message_size: Option<usize>,
        max_encoding_message_size: Option<usize>,
    }
    impl<T> SpiffeWorkloadApiServer<T> {
        pub fn new(inner: T) -> Self {
            Self::from_arc(Arc::new(inner))
        }
        pub fn from_arc(inner: Arc<T>) -> Self {
            Self {
                inner,
                accept_compression_encodings: Default::default(),
                send_compression_encodings: Default::default(),
                max_decoding_message_size: None,
                max_encoding_message_size: None,
            }
        }
        pub fn with_interceptor<F>(
            inner: T,
            interceptor: F,
        ) -> InterceptedService<Self, F>
        where
            F: tonic::service::Interceptor,
        {
            InterceptedService::new(Self::new(inner), interceptor)
        }
        /// Enable decompressing requests with the given encoding.
        #[must_use]
        pub fn accept_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.accept_compression_encodings.enable(encoding);
            self
        }
        /// Compress responses with the given encoding, if the client supports it.
        #[must_use]
        pub fn send_compressed(mut self, encoding: CompressionEncoding) -> Self {
            self.send_compression_encodings.enable(encoding);
            self
        }
        /// Limits the maximum size of a decoded message.
        ///
        /// Default: `4MB`
        #[must_use]
        pub fn max_decoding_message_size(mut self, limit: usize) -> Self {
            self.max_decoding_message_size = Some(limit);
            self
        }
        /// Limits the maximum size of an encoded message.
        ///
        /// Default: `usize::MAX`
        #[must_use]
        pub fn max_encoding_message_size(mut self, limit: usize) -> Self {
            self.max_encoding_message_size = Some(limit);
            self
        }
    }
    impl<T, B> tonic::codegen::Service<http::Request<B>> for SpiffeWorkloadApiServer<T>
    where
        T: SpiffeWorkloadApi,
        B: Body + std::marker::Send + 'static,
        B::Error: Into<StdError> + std::marker::Send + 'static,
    {
        type Response = http::Response<tonic::body::Body>;
        type Error = std::convert::Infallible;
        type Future = BoxFuture<Self::Response, Self::Error>;
        fn poll_ready(
            &mut self,
            _cx: &mut Context<'_>,
        ) -> Poll<std::result::Result<(), Self::Error>> {
            Poll::Ready(Ok(()))
        }
        fn call(&mut self, req: http::Request<B>) -> Self::Future {
            match req.uri().path() {
                "/SpiffeWorkloadAPI/FetchX509SVID" => {
                    #[allow(non_camel_case_types)]
                    struct FetchX509SVIDSvc<T: SpiffeWorkloadApi>(pub Arc<T>);
                    impl<
                        T: SpiffeWorkloadApi,
                    > tonic::server::ServerStreamingService<super::X509svidRequest>
                    for FetchX509SVIDSvc<T> {
                        type Response = super::X509svidResponse;
                        type ResponseStream = T::FetchX509SVIDStream;
                        type Future = BoxFuture<
                            tonic::Response<Self::ResponseStream>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::X509svidRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as SpiffeWorkloadApi>::fetch_x509svid(&inner, request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = FetchX509SVIDSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/SpiffeWorkloadAPI/FetchX509Bundles" => {
                    #[allow(non_camel_case_types)]
                    struct FetchX509BundlesSvc<T: SpiffeWorkloadApi>(pub Arc<T>);
                    impl<
                        T: SpiffeWorkloadApi,
                    > tonic::server::ServerStreamingService<super::X509BundlesRequest>
                    for FetchX509BundlesSvc<T> {
                        type Response = super::X509BundlesResponse;
                        type ResponseStream = T::FetchX509BundlesStream;
                        type Future = BoxFuture<
                            tonic::Response<Self::ResponseStream>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::X509BundlesRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as SpiffeWorkloadApi>::fetch_x509_bundles(
                                        &inner,
                                        request,
                                    )
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = FetchX509BundlesSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/SpiffeWorkloadAPI/FetchJWTSVID" => {
                    #[allow(non_camel_case_types)]
                    struct FetchJWTSVIDSvc<T: SpiffeWorkloadApi>(pub Arc<T>);
                    impl<
                        T: SpiffeWorkloadApi,
                    > tonic::server::UnaryService<super::JwtsvidRequest>
                    for FetchJWTSVIDSvc<T> {
                        type Response = super::JwtsvidResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::JwtsvidRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as SpiffeWorkloadApi>::fetch_jwtsvid(&inner, request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = FetchJWTSVIDSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/SpiffeWorkloadAPI/FetchJWTBundles" => {
                    #[allow(non_camel_case_types)]
                    struct FetchJWTBundlesSvc<T: SpiffeWorkloadApi>(pub Arc<T>);
                    impl<
                        T: SpiffeWorkloadApi,
                    > tonic::server::ServerStreamingService<super::JwtBundlesRequest>
                    for FetchJWTBundlesSvc<T> {
                        type Response = super::JwtBundlesResponse;
                        type ResponseStream = T::FetchJWTBundlesStream;
                        type Future = BoxFuture<
                            tonic::Response<Self::ResponseStream>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::JwtBundlesRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as SpiffeWorkloadApi>::fetch_jwt_bundles(&inner, request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = FetchJWTBundlesSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.server_streaming(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                "/SpiffeWorkloadAPI/ValidateJWTSVID" => {
                    #[allow(non_camel_case_types)]
                    struct ValidateJWTSVIDSvc<T: SpiffeWorkloadApi>(pub Arc<T>);
                    impl<
                        T: SpiffeWorkloadApi,
                    > tonic::server::UnaryService<super::ValidateJwtsvidRequest>
                    for ValidateJWTSVIDSvc<T> {
                        type Response = super::ValidateJwtsvidResponse;
                        type Future = BoxFuture<
                            tonic::Response<Self::Response>,
                            tonic::Status,
                        >;
                        fn call(
                            &mut self,
                            request: tonic::Request<super::ValidateJwtsvidRequest>,
                        ) -> Self::Future {
                            let inner = Arc::clone(&self.0);
                            let fut = async move {
                                <T as SpiffeWorkloadApi>::validate_jwtsvid(&inner, request)
                                    .await
                            };
                            Box::pin(fut)
                        }
                    }
                    let accept_compression_encodings = self.accept_compression_encodings;
                    let send_compression_encodings = self.send_compression_encodings;
                    let max_decoding_message_size = self.max_decoding_message_size;
                    let max_encoding_message_size = self.max_encoding_message_size;
                    let inner = self.inner.clone();
                    let fut = async move {
                        let method = ValidateJWTSVIDSvc(inner);
                        let codec = tonic_prost::ProstCodec::default();
                        let mut grpc = tonic::server::Grpc::new(codec)
                            .apply_compression_config(
                                accept_compression_encodings,
                                send_compression_encodings,
                            )
                            .apply_max_message_size_config(
                                max_decoding_message_size,
                                max_encoding_message_size,
                            );
                        let res = grpc.unary(method, req).await;
                        Ok(res)
                    };
                    Box::pin(fut)
                }
                _ => {
                    Box::pin(async move {
                        let mut response = http::Response::new(
                            tonic::body::Body::default(),
                        );
                        let headers = response.headers_mut();
                        headers
                            .insert(
                                tonic::Status::GRPC_STATUS,
                                (tonic::Code::Unimplemented as i32).into(),
                            );
                        headers
                            .insert(
                                http::header::CONTENT_TYPE,
                                tonic::metadata::GRPC_CONTENT_TYPE,
                            );
                        Ok(response)
                    })
                }
            }
        }
    }
    impl<T> Clone for SpiffeWorkloadApiServer<T> {
        fn clone(&self) -> Self {
            let inner = self.inner.clone();
            Self {
                inner,
                accept_compression_encodings: self.accept_compression_encodings,
                send_compression_encodings: self.send_compression_encodings,
                max_decoding_message_size: self.max_decoding_message_size,
                max_encoding_message_size: self.max_encoding_message_size,
            }
        }
    }
    /// Generated gRPC service name
    pub const SERVICE_NAME: &str = "SpiffeWorkloadAPI";
    impl<T> tonic::server::NamedService for SpiffeWorkloadApiServer<T> {
        const NAME: &'static str = SERVICE_NAME;
    }
}
