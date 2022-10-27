const bcrypt = require("bcrypt");
const {supabase} = require("../js/supabase")
const {validate} = require("../models/UserValidate")

module.exports = async (fastify, opts, next) => {
    fastify.post("/signup", async (req, res) => {
      try {
        console.log(req.body)
      //   const {email, password} = req.body;
      //  const datavalidate = validate(req.body);
      //   res.send(datavalidate.errors)
      //  if(datavalidate.errors){
      //   res.send(datavalidate.errors)
      //  }else{
      //   const hashedPassword = await bcrypt.hash(password, 10);
      //   const {data, error} = await supabase.from("Users").insert({email: email, password: hashedPassword})
        
        
      //   res.send({
      //     id: data.id,
      //     email: data.email,
      //   })
      //  }
       
        
      } catch (error) {
        console.log(error)
      }
    })
    next()
}