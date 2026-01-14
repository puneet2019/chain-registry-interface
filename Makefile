# Minimal Makefile for local dev and CI

.PHONY: all ci ci-go ci-rust ci-ts schemas go-build go-test rust-build rust-test ts-build \
	proto-core proto-core-go proto-all-chains proto-all-chains-go proto-clean \
	tag-go tag-rust tag-ts publish-rust publish-rust-dry publish-ts publish-ts-dry release-go release-rust release-ts release-all \
	fetch-upstream-protos-core fetch-upstream-protos

all: ci

ci: ci-go ci-rust

# Fetch latest schemas for local reference (dev-only)
schemas:
	bash scripts/fetch-schemas.sh

# Go
go-build:
	cd sdk-go/chainregistry && go build ./...

go-test:
	cd sdk-go/chainregistry && go test ./...

ci-go: go-build go-test

# Rust
rust-build:
	cd sdk-rust/chain_registry && cargo build

rust-test:
	cd sdk-rust/chain_registry && cargo test

ci-rust: rust-build rust-test

# TypeScript
ts-build:
	cd ts && npm i && npm run build

ts-test:
	cd ts && (npm ci || npm i)
	cd ts && npm test

ci-ts: ts-test

# --- Release helpers ---
# Usage:
#   VERSION=0.1.0 make tag-go       # creates and pushes git tag for Go (module-based release)
#   VERSION=0.1.0 make release-rust # tags + cargo publish (requires cargo login)
#   VERSION=0.1.0 make release-ts   # tags + npm publish   (requires npm login)
#   VERSION=0.1.0 make release-all  # rust + ts (go is tag-only)

REMOTE ?= origin

require-version:
	@if [ -z "$(VERSION)" ]; then echo "ERROR: VERSION is not set. Usage: VERSION=x.y.z make <target>"; exit 1; fi

# Git tags (annotated) per SDK namespace
# Go uses VCS tagging for modules; no registry publish step.
tag-go: require-version
	git tag -a go-sdk/v$(VERSION) -m "go-sdk v$(VERSION)"
	git push $(REMOTE) go-sdk/v$(VERSION)

# Rust crate: tag only (publish via cargo in publish-rust)
tag-rust: require-version
	git tag -a rust-sdk/v$(VERSION) -m "rust-sdk v$(VERSION)"
	git push $(REMOTE) rust-sdk/v$(VERSION)

# TypeScript package: tag only (publish via npm in publish-ts)
tag-ts: require-version
	git tag -a ts-sdk/v$(VERSION) -m "ts-sdk v$(VERSION)"
	git push $(REMOTE) ts-sdk/v$(VERSION)

# Registry publishes (assumes versions already bumped in manifests)
publish-rust:
	cd sdk-rust/chain_registry && cargo publish

publish-rust-dry:
	cd sdk-rust/chain_registry && cargo publish --dry-run

publish-ts:
	cd sdk-ts && npm publish --access public --tag alpha

publish-ts-dry:
	cd sdk-ts && npm pack
	echo "Dry run: npm pack created a .tgz file but did not publish"

# Composite release targets
release-go: tag-go

release-rust: tag-rust publish-rust

release-ts: tag-ts publish-ts

release-all: release-go release-rust release-ts

# Proto registry (core Cosmos stack)
PROTO_OUT := proto-bundles

proto-core:
	OUT_DIR=$(PROTO_OUT) bash proto-tools/builders/build-core-stack.sh

# Same as proto-core but also try Go codegen (requires protoc + protoc-gen-go installed)
proto-core-go:
	GEN_GO=1 OUT_DIR=$(PROTO_OUT) bash proto-tools/builders/build-core-stack.sh

# Proto registry (core Cosmos stack with latest tags for TypeScript)
PROTO_CORE_LATEST_OUT := proto-bundles-core-latest

proto-core-latest:
	OUT_DIR=$(PROTO_CORE_LATEST_OUT) bash proto-tools/builders/build-core-stack-latest.sh

# Same as proto-core-latest but also try TS codegen (uses latest relevant tags)
proto-core-latest-ts:
	GEN_TS=1 OUT_DIR=proto-ts bash proto-tools/builders/build-core-stack-ts-latest.sh

# Proto registry (core Cosmos stack TypeScript bindings - cosmjs-types style)
PROTO_CORE_TS_OUT := proto-bundles-ts-core

proto-core-ts:
	OUT_DIR=$(PROTO_CORE_TS_OUT) bash proto-tools/builders/build-core-stack-ts.sh

# TypeScript SDK (core Cosmos stack - cosmjs-types style with latest tags)
sdk-ts-build:
	OUT_DIR=proto-ts bash proto-tools/builders/build-core-stack-ts-latest.sh

# Same as sdk-ts-build but also run tests
sdk-ts-test:
	cd sdk-ts && npm run build && npm test

# Proto registry (all chains in chain-registry - expanded functionality)
PROTO_ALL_CHAINS_OUT := proto-bundles-all

proto-all-chains:
	OUT_DIR=$(PROTO_ALL_CHAINS_OUT) bash proto-tools/builders/build-all-chains.sh

# Same as proto-all-chains but also try Go codegen
proto-all-chains-go:
	GEN_GO=1 OUT_DIR=$(PROTO_ALL_CHAINS_OUT) bash proto-tools/builders/build-all-chains.sh

proto-clean:
	rm -rf $(PROTO_OUT) $(PROTO_ALL_CHAINS_OUT) $(PROTO_CORE_LATEST_OUT) $(PROTO_CORE_TS_OUT)

# Upstream protos (direct from upstream repos via git and optional buf export)
UPSTREAM_OUT := protos/upstream

# Fetch core stack upstream protos into protos/upstream/
fetch-upstream-protos-core:
	OUT_DIR=$(UPSTREAM_OUT) bash proto-tools/fetchers/fetch-upstream-protos.sh core

# Fetch arbitrary repos; pass MODULES as space-separated list of repo@tag
# Example:
#   MODULES="github.com/cosmos/cosmos-sdk@v0.50.9 github.com/cosmos/ibc-go@v8.4.0" make fetch-upstream-protos
fetch-upstream-protos:
	@if [ -z "$(MODULES)" ]; then echo "ERROR: set MODULES to space-separated <repo>@<tag> list"; exit 1; fi
	OUT_DIR=$(UPSTREAM_OUT) bash proto-tools/fetchers/fetch-upstream-protos.sh fetch $(MODULES)

# Fetch latest proto files for core Cosmos stack
fetch-proto-core-latest:
	bash fetch-proto-files.sh

# Clean proto directory
clean-proto:
	rm -rf proto/

.PHONY: proto-all-chains-go proto-all-chains proto-clean proto-core-go proto-core proto-core-latest proto-core-latest-ts proto-core-ts sdk-ts-build sdk-ts-test fetch-proto-core-latest clean-proto
