var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    username: String,
    pass: String,
    tel: Number,
    email: String,
    name: String,
    updated: { type: Date, default: Date.now },
})

module.exports = mongoose.model('User', userSchema)
