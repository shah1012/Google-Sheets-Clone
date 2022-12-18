const supabase = require("../js/supabase");

module.exports = async (fastify, opts, next) => {
  fastify.post("/getdocs", async (req, res) => {
    const body = req.body;
    const { email } = body;
    const { id } = req.params;

    if (email) {
      try {
        const { data, error } = await supabase
          .from("Users")
          .select()
          .eq("email", [`${email}`]);

        if (data) {
          let docs = data[0].documents;
          if (docs) {
            res.send(docs);
          }
        }
        if (error) {
          res.status(404).send({
            message: "There was a problem fetching the documents",
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  });

  next();
};
