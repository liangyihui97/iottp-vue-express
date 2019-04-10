var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    username: String,
    userRole: String,
    pass: String,
    tel: String,
    email: String,
    name: String,
    rtime: String
})

module.exports = mongoose.model('User', userSchema)
