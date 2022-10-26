import Ajv2020 from 'ajv/dist/2020';
const ajv = new Ajv2020();

import asyncapi from './asyncapi.json';
import contracts from './contracts.json';

/**
 * @description Compile a schema and test against it.
 */
async function test(schema: any, contract: any) {
  const validate = ajv.compile(schema); // dereferencedSchema
  if (validate(contract)) console.log('Success');
  else console.log(validate.errors);
}

/**
 * @description Controller functionality to run all tests.
 */
async function runTests() {
  const schemas = asyncapi.components.schemas;
  const schemaNames = Object.keys(schemas);
  const filteredSchemas = Object.values(schemas);

  const tests = schemaNames.map(async (schemaName: string, index) => {
    console.log('Schema name is', schemaName);
    const contract = contracts[schemaName];
    const schema = filteredSchemas[index];
    await test(schema, contract);
  });

  Promise.all(tests);
}

runTests();
