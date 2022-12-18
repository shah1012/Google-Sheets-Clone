const supabase = require("../js/supabase");

module.exports = async (fastify, opts, next) => {
  fastify.post("/update/:id", async (req, res) => {
    const body = req.body;
    const { email, updateData } = body;
    const { id } = req.params;

    if (email && updateData) {
      try {
        const { data, error } = await supabase
          .from("Users")
          .select()
          .eq("email", [`${email}`]);

        let prevDocs = data[0].documents;
        let combinedObj = {};

        Object.assign(combinedObj, prevDocs);
        Object.assign(combinedObj, {
          [id]: {
            data: { ...updateData },
          },
        });

        console.log(combinedObj);
        await supabase
          .from("Users")
          .update({
            documents: { ...combinedObj },
          })
          .eq("email", email);

        res.status(200).send({
          message: "Successfully added to the database",
        });
      } catch (err) {
        console.log(err);
      }
    }
  });

  next();
};
