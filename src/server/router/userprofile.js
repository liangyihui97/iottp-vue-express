var express = require('express')
var router = express.Router()

var UserProfile = require('../model/UserProfile')

router.route('/validate').post((req, res) => {
    UserProfile.findOne({username: req.body.username, pass: req.body.pass}, (err, user) => {
        if (err) {
        }
        res.json(user)
    })
})
router.route('/insert').post((req, res) => {
UserProfile.findOne({username: req.body.username}, (err, user) => {
        if (user==null) {
            UserProfile.create({username: req.body.username, userRole: req.body.userRole, pass: req.body.pass,tel: req.body.tel,email: req.body.email, name: req.body.name, rtime: req.body.rtime}, (err, user) => {
        if (err) {
        }
        res.json(user)
    })
        }
else res.json('erro')
    })
    
})
router.route('/update').post((req, res) => {
    UserProfile.create({username: req.body.username, pass: req.body.pass}, (err, user) => {
        if (err) {
            console.log(err)
        }
        res.json(user)
    })
})
module.exports = router

