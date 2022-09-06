const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    account: { type: String, required: true, lowercase: true, unique: true },
    userName:{type:String, required: true, lowercase:true, unique:true},
    favNumber: { type: String, required: true },
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
