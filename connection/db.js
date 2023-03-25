const mongoose = require("mongoose")
require("dotenv").config()
const connectinTodb = mongoose.connect(process.env.mongourl)

module.exports = connectinTodb