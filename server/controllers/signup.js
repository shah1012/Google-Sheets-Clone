const bcrypt = require("bcrypt");

module.exports = async (fastify, opts, next) => {
    fastify.post("/signup", async (req, res) => {
      try {
        const {email, password} = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        
      } catch (error) {
        console.log(error)
      }
    })
    next()
}