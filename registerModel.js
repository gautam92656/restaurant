const mongoose = require("mongoose")
let connect = require("./connect")

let schemes = new mongoose.Schema({
    firstname:String,
    middlename: String,
    lastname: String,
    mobileNumber: Number,
    city: String,
    district: String,
    state: String,
    country: String,
    pincode: Number,
    password: Number
})
module.exports = mongoose.model("Register", schemes)
