const mongoose = require("mongoose")

const mobileSchema = mongoose.Schema({
    brand:String,
    model:String,
    daysUsed:Number,
    ogprice:Number,
    sellingprice:Number,
    userid:String
})

const MobileModel = mongoose.model("bands", mobileSchema)

module.exports = MobileModel