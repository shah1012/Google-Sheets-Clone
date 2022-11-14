const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajv = new Ajv();
addFormats(ajv);

const schema = {
  title: "Signup request payload",
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
    },
    password: {
      type: "string",
      minLength: 1,
    },
  },

  required: ["email", "password"],
};

const validate = ajv.compile(schema);

module.exports = validate;
