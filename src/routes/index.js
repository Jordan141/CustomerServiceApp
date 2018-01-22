const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')
const {isLoggedIn} = require('../middleware')

router.get('/', function(req,res){
    res.render('home', {currentUser: req.user})
})
router.get('/login', function(req,res){
    res.render('login')
})
router.get('/register', function(req,res){
    res.render('register')  
})
router.post('/login', function(req, res){
    res.send(`Received: ${JSON.stringify(req.body)}`)
})
router.post('/register', function(req,res){
    res.send(`Received: ${JSON.stringify(req.body)}`)
})

module.exports = router