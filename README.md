# Demos for validating schemas and contracts using ajv

Two demos for validating either freeform JSON schemas and AsyncAPI schemas using [ajv](https://ajv.js.org).

## Install

Run `npm install`.

## Run

Run `npm start` to validate a simple inline schema. See `index.ts` for the code.

Run `npm test` to do a slightly more elaborate test of an [AsyncAPI specification](https://www.asyncapi.com), and testing all of its respective schemas with a dedicated JSON file with our contracts (expectations). See `test.ts` for the code.
