const supabase = require("../js/supabase");

module.exports = (fastify, opts, next) => {
  fastify.post("/login", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    if (email && password) {
      const { data, error } = await supabase
        .from("Users")
        .select("email")
        .eq("email", email);
      if (error || data.length < 1) {
        res.code(500).send({
          message: "There was a problem finding  a account under that email",
        });
      }
      res.send(data);
    } else {
      res.code("Missing Credentials");
    }
  });
  next();
};
