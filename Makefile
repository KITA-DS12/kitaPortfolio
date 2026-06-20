NUXI := node node_modules/@nuxt/cli/bin/nuxi.mjs

.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make info        Show info"
	@echo "  make install     Install dependencies"
	@echo "  make dev         Start development server"
	@echo "  make build       Build for production"
	@echo "  make preview     Start preview server"
	@echo "  make generate    Generate static site"
	@echo "  make typecheck   Typecheck"
	@echo "  make upgrade     Upgrade dependencies"
	@echo "  make upload      Upload to S3"

.PHONY: info
info:
	@echo "Showing info..."
	$(NUXI) info

.PHONY: install
install:
	@echo "Installing..."
	bun install

.PHONY: dev
dev:
	@echo "Starting development server..."
	$(NUXI) dev

.PHONY: build
build:
	@echo "Building..."
	$(NUXI) build

.PHONY: preview
preview:
	@echo "Starting preview server..."
	$(NUXI) preview

.PHONY: generate
generate:
	@echo "Generating..."
	$(NUXI) generate

.PHONY: typecheck
typecheck:
	@echo "Typechecking..."
	$(NUXI) typecheck

.PHONY: upgrade
upgrade:
	@echo "Upgrading..."
	$(NUXI) upgrade

.PHONY: upload
upload:
	aws s3 sync ./.output/public/ s3://portfolio-xn--djr-net/
