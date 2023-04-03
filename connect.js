let mongoose = require("mongoose")
let connect = mongoose.connect("mongodb://localhost:27017/form")
module.exports = connect