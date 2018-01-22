const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')
const {isLoggedIn} = require('../middleware')


router.get('/', isLoggedIn, (req,res) => {
    res.render('chat', {currentUser: req.user})
})
router.post('/', isLoggedIn, (req,res) => {
    res.send(`Received: ${JSON.stringify(req.body)}`)
})


module.exports = router