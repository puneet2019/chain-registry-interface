# Minimal Makefile for local dev and CI

.PHONY: all ci ci-go ci-rust ci-ts schemas go-build go-test rust-build rust-test ts-build \
	proto-build proto-fetch proto-cosmoshub proto-osmosis proto-all proto-discover proto-clean \
	proto-publish-ts proto-publish-ts-dry proto-publish-rust proto-publish-rust-dry \
	tag-go tag-rust tag-ts publish-rust publish-rust-dry publish-ts publish-ts-dry release-go release-rust release-ts release-all

all: ci

ci: ci-go ci-rust

# Fetch latest schemas for local reference (dev-only)
schemas:
	bash scripts/fetch-schemas.sh

# Go
go-build:
	cd chain-registry-types/go && go build ./...

go-test:
	cd chain-registry-types/go && go test ./...

ci-go: go-build go-test

# Rust
rust-build:
	cd chain-registry-types/rust && cargo build

rust-test:
	cd chain-registry-types/rust && cargo test

ci-rust: rust-build rust-test

# TypeScript
ts-build:
	cd chain-registry-types/ts && npm i && npm run build

ts-test:
	cd chain-registry-types/ts && (npm ci || npm i)
	cd chain-registry-types/ts && npm test

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
	cd chain-registry-types/rust && cargo publish

publish-rust-dry:
	cd chain-registry-types/rust && cargo publish --dry-run

publish-ts:
	cd chain-registry-types/ts && npm publish --access public --tag alpha

publish-ts-dry:
	cd chain-registry-types/ts && npm pack
	echo "Dry run: npm pack created a .tgz file but did not publish"

# Composite release targets
release-go: tag-go

release-rust: tag-rust publish-rust

release-ts: tag-ts publish-ts

release-all: release-go release-rust release-ts

# --- Proto Registry ---
# Usage:
#   make proto-cosmoshub                    # fetch + Go/TS/Rust codegen for cosmoshub
#   make proto-osmosis                      # fetch + Go/TS/Rust codegen for osmosis
#   CHAIN=juno make proto-build             # fetch + Go/TS/Rust codegen for any chain
#   CHAIN=cosmoshub make proto-fetch        # fetch only (no codegen)
#   make proto-discover                     # list all discoverable chains
#   make proto-all                          # build all discovered chains
#   make proto-clean                        # remove all generated output

PROTO_REGISTRY := proto-registry/scripts/registry.sh

proto-fetch:
	bash $(PROTO_REGISTRY) fetch $(CHAIN)

proto-build:
	bash $(PROTO_REGISTRY) build $(CHAIN) --go --ts --rust

proto-cosmoshub:
	bash $(PROTO_REGISTRY) build cosmoshub --go --ts --rust

proto-osmosis:
	bash $(PROTO_REGISTRY) build osmosis --go --ts --rust

proto-discover:
	bash $(PROTO_REGISTRY) discover

proto-all:
	bash $(PROTO_REGISTRY) build-all --go --ts --rust

proto-clean:
	rm -rf proto/

# --- Proto package publishing ---
proto-publish-ts:
	cd proto/cosmoshub/ts/v25.2.0 && npm publish --access public --tag alpha
	cd proto/osmosis/ts/v31.0.0 && npm publish --access public --tag alpha

proto-publish-ts-dry:
	cd proto/cosmoshub/ts/v25.2.0 && npm pack
	cd proto/osmosis/ts/v31.0.0 && npm pack

proto-publish-rust:
	cd proto/cosmoshub/rust/v25.2.0 && cargo publish
	cd proto/osmosis/rust/v31.0.0 && cargo publish

proto-publish-rust-dry:
	cd proto/cosmoshub/rust/v25.2.0 && cargo publish --dry-run
	cd proto/osmosis/rust/v31.0.0 && cargo publish --dry-run
