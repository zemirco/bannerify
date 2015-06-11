
BIN = ./node_modules/.bin
ESLINT = $(BIN)/eslint
MOCHA = $(BIN)/mocha

test:
	$(MOCHA)

eslint: index.js test.js
	$(ESLINT) $^

.PHONY: test eslint
