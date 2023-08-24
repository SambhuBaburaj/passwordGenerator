const mongoose = require("mongoose");
const SavedPassword = mongoose.Schema({
User:mongoose.ObjectId,
Name:String,
Password:String

})
const PasswordData=mongoose.model('PasswordData',SavedPassword)
module.exports={PasswordData}