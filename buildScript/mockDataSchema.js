//using json-faker-schema for shcema
export const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 10,
      maxItems: 15,
      items: {
        type: 'object',
        properties: {
          id: {
            $ref: '#/definitions/positiveInt'
          },
          name: {
            type: 'string',
            faker: 'name.findName'
          },
          email: {
            type: 'string',
            format: 'email',
            faker: 'internet.email'
          }
        },
        required: ['id', 'name', 'email']
      }
    },
  },
  required: ['users'],
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true
    }
  }
};
