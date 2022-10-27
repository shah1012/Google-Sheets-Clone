const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
    type: "object",
    properties: {
        email: {type: "string"},
        password: {type: "string"}
    },
    required: ["email", "password"]
}

const validate = ajv.compile(schema)

module.exports = {validate};