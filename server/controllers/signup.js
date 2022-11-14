const bcrypt = require("bcrypt");
const supabase = require("../js/supabase");
const validate = require("../ValidationSchemas/Validate.js");

module.exports = async (fastify, opts, next) => {
  fastify.post("/signup", async (req, res) => {
    try {
      const { email, password } = req.body;
      const validPayload = validate(req.body);

      if (validPayload) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const { data, error } = await supabase
          .from("Users")
          .insert({ email, password: hashedPassword });

        console.log(error);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  });
  next();
};
