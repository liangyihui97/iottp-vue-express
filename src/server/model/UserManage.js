var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    nodeName: String,
    state: String,

})

module.exports = mongoose.model('UserManage', userSchema)
