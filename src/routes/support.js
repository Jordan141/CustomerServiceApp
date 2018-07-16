const express = require('express')
const router = express.Router()
const Support = require('../models/support')
const passport = require('passport')
const User = require('../models/user')
const {isLoggedIn} = require('../middleware')
const {ADMIN_SECRET_CODE} = require('../../config.json')




router.get('/', (req,res) => {
    Support.find({}, (err, employees) => {
        if(err) return console.log(err)
        res.render('home', {employees, currentUser: req.user})
    })
})

router.get('/:id', (req, res) => {
    Support.findById(req.params.id, (err, employee) => {
        if(err) return console.log(err)
        res.render('show', {employee})
    })
})

module.exports = router