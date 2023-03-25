const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
   username:String,
   email:String,
   password:String,
   location:String
})

const UserModel = mongoose.model("bandbuser", userSchema)

module.exports = UserModel