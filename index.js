let express = require("express")
let app = express()
// let mongoose = require("mongoose")
let ejs = require("ejs")

let Register = require("./registerModel")
// const { mname } = require("./value")
require("./connect")
app.use(express.json())
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))

app.get("/register", async (req, res) => {
    let register = await Register.find()
    res.render("register")
})
app.get("/login", async (req, res) => {
    let register = await Register.find()
    res.render("login")
})
app.post("/register", async (req, res) => {
    let register = await Register.create({
        firstname: req.body.fname,
        middlename: req.body.mname,
        lastname: req.body.lname,
        mobileNumber: req.body.mobileNumber,
        city: req.body.city,
        district: req.body.district,
        state: req.body.state,
        country: req.body.country,
        pincode: req.body.pincode,
        password: req.body.password
    })
    await res.send(register)
    // await res.render("login")
})


app.put("/", async (req, res) => {
    let register = await Register.updateOne(
        {
            "firstname": "keval",
        }, {
        $set: {
            "lastname": "dholakiya",
            "middlename": "d"
        }
    })
    res.send(register)
})
app.delete("/", async (req, res) => {
    let register = await Register.deleteOne({ "firstname": "krishna", "lastname": "dholak" })
    res.send(register)
})
app.listen(5052)