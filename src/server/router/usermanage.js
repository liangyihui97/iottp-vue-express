var express = require('express')
var router = express.Router()

var UserManage = require('../model/UserManage')

router.route('/validate').post((req, res) => {
    UserManage.findOne({username: req.body.username, pass: req.body.pass}, (err, user) => {
        if (err) {
            console.log(err)
        }
        res.json(user)
    })
})
router.route('/insert').post((req, res) => {
    UserManage.create({username: req.body.username, userRole: req.body.userRole, pass: req.body.pass,tel: req.body.tel,email: req.body.email, name: req.body.name, rtime: req.body.rtime}, (err, user) => {
        if (err) {
            console.log(err)
        }
        res.json(user)
    })
})
router.route('/update').post((req, res) => {
    UserManage.create({username: req.body.username, pass: req.body.pass}, (err, user) => {
        if (err) {
            console.log(err)
        }
        res.json(user)
    })
})
module.exports = router

