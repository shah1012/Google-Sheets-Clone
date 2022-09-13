const {createClient} = require("@supabase/supabase-js")
require("dotenv").config();


const supabase = createClient(process.env.DBURL, process.env.ANONKEY)


module.exports = supabase;