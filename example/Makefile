# Makefile for running chain-registry examples

.PHONY: all install-deps fetch-js fetch-ts run-go run-rust clean help

# Default target
all: fetch-js fetch-ts run-go run-rust

# Install dependencies
install-deps:
	npm install

# Run JavaScript chain data fetch example
fetch-js:
	@echo "Running JavaScript chain data fetch example..."
	node fetch-chain-data.js

# Run TypeScript chain data fetch example
fetch-ts:
	@echo "Running TypeScript chain data fetch example..."
	npx ts-node fetch-chain-data.ts

# Run Go example
run-go:
	@echo "Running Go example..."
	@echo "Note: This may require resolving dependency conflicts with newer SDK versions"
	go run fetch-chain-data.go

# Run Rust example
run-rust:
	@echo "Running Rust example..."
	@echo "Note: This may have type mismatches due to differences in Rust type definitions"
	cargo run --bin fetch-chain-data

# Clean build artifacts
clean:
	rm -f fetch-chain-data

# Help
help:
	@echo "Makefile for chain-registry examples"
	@echo ""
	@echo "Usage:"
	@echo "  make install-deps    - Install JavaScript dependencies"
	@echo "  make fetch-js        - Fetch chain data with JavaScript"
	@echo "  make fetch-ts        - Fetch chain data with TypeScript"
	@echo "  make run-go          - Run Go example"
	@echo "  make run-rust        - Run Rust example"
	@echo "  make clean           - Clean build artifacts"
	@echo "  make help            - Show this help"