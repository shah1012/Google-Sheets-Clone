const supabase = require("../js/supabase");
const validate = require("../ValidationSchemas/Validate.js");
const bcrypt = require("bcrypt");

module.exports = (fastify, opts, next) => {
  fastify.post("/login", async (req, res) => {
    const parsedBody = JSON.parse(req.body);
    const { email, password } = parsedBody;
    if (email && password) {
      const validPayload = validate(parsedBody);

      if (validPayload) {
        const { data, error } = await supabase
          .from("Users")
          .select()
          .in("email", [`${email}`]);

        if (error || data.length < 1) {
          return res.code(500).send({
            message: "There was a problem finding  a account under that email",
          });
        }

        if (bcrypt.compareSync(password, data[0].password)) {
          res.send(data[0]);
        } else {
          return res.code(500).send({
            message: "Wrong Credentials",
          });
        }
      } else {
        res.code(500).send(validate.errors[0].message);
      }
    } else {
      res.code(404).send("Missing Credentials");
    }
  });
  next();
};
