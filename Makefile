# Minimal Makefile for local dev and CI

.PHONY: all ci ci-go ci-rust ci-ts schemas go-build go-test rust-build rust-test ts-build

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
