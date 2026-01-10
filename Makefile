# Minimal Makefile for local dev and CI

.PHONY: all ci ci-go ci-rust ci-ts schemas go-build go-test rust-build rust-test ts-build proto-core proto-core-go proto-clean \
	tag-go tag-rust tag-ts publish-rust publish-ts release-go release-rust release-ts release-all

all: ci

ci: ci-go ci-rust

# Fetch latest schemas for local reference (dev-only)
schemas:
	bash scripts/fetch-schemas.sh

# Go
go-build:
	cd go/chainregistry && go build ./...

go-test:
	cd go/chainregistry && go test ./...

ci-go: go-build go-test

# Rust
rust-build:
	cd rust/chain_registry && cargo build

rust-test:
	cd rust/chain_registry && cargo test

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
	cd rust/chain_registry && cargo publish

publish-ts:
	cd ts && npm publish --access public

# Composite release targets
release-go: tag-go

release-rust: tag-rust publish-rust

release-ts: tag-ts publish-ts

release-all: release-go release-rust release-ts

# Proto registry (core Cosmos stack)
PROTO_OUT := proto-bundles
CORE_MODULES := \
	github.com/cometbft/cometbft@v0.38.12 \
	github.com/cosmos/cosmos-sdk@v0.50.9 \
	github.com/cosmos/ibc-go/v8@v8.4.0 \
	github.com/CosmWasm/wasmd@v0.50.0

proto-core:
	OUT_DIR=$(PROTO_OUT) bash scripts/proto-registry.sh build $(CORE_MODULES)

# Same as proto-core but also try Go codegen (requires protoc + protoc-gen-go installed)
proto-core-go:
	GEN_GO=1 OUT_DIR=$(PROTO_OUT) bash scripts/proto-registry.sh build $(CORE_MODULES)

proto-clean:
	rm -rf $(PROTO_OUT)
