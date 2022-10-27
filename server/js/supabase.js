const {createClient} = require("@supabase/supabase-js")
require("dotenv").config();

module.exports.supabase = createClient(process.env.DBURL, process.env.ANONKEY);