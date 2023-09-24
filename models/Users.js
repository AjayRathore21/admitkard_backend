const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    phone:Number,
    otp:Number
})



module.exports = mongoose.model('User',userSchema)