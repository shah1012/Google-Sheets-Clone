const bcrypt = require("bcrypt");
const supabase = require("../js/supabase");
const validate = require("../ValidationSchemas/Validate.js");

module.exports = async (fastify, opts, next) => {
  fastify.post("/signup", async (req, res) => {
    try {
      const parsedBody = req.body;
      const { email, password } = parsedBody;
      const validPayload = validate(parsedBody);

      if (validPayload) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const { data, error } = await supabase
          .from("Users")
          .insert({ email, password: hashedPassword });
        if (error) {
          res.code(400).send(error);
        }
        res.send(data);
      } else {
        res.code(404).send({
          message: validate.errors[0].message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
  next();
};
