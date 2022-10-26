import Ajv from 'ajv';
const ajv = new Ajv();

const schema = {
  type: 'object',
  description: 'Get user name by ID.',
  properties: {
    id: {
      type: 'number',
      minimum: 0,
      maximum: 99
    }
  },
  required: ['id'],
  additionalProperties: false
};

const validate = ajv.compile(schema);

const data = {
  id: 34
};

if (validate(data)) console.log('Success');
else console.log(validate.errors);
