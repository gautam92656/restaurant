// let fname = document.forms["register"]["fname"].value
let fname = document.getElementById("fname").value
let mname = document.forms["register"]["mname"].value
let lname = document.forms["register"]["lname"].value
let TelNumber = document.forms["register"]["TelNumber"].value
let city = document.forms["register"]["fname"].value
let district = document.forms["register"]["district"].value
let state = document.forms["register"]["state"].value
let County = document.forms["register"]["County"].value 
let Pincode = document.forms["register"]["Pincode"].value 
let password = document.forms["register"]["password"].value 

console.log(fname)
module.exports = {fname,mname,password,Pincode,County,state,district,city,TelNumber,lname}