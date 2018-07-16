const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')
const {isLoggedIn} = require('../middleware')
const {ADMIN_SECRET_CODE} = require('../../config.json')


router.get('/', (req, res) => {
    res.render('landing')
})

router.get('/login', function(req,res){
    res.render('login')
})
router.get('/register', function(req,res){
    res.render('register')  
})
router.post('/login', passport.authenticate('local', {
    successRedirect: '/chat',
    failureRedirect: '/login',
    failureFlash: true,
    successFlash: 'Login successful!'
}))

router.post('/register', function(req,res){
    let newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email,
        avatar: req.body.avatar
    })
    if(req.body.adminCode === ADMIN_SECRET_CODE){
        newUser.isAdmin = true
    }

    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            req.flash('error', err.message)
            return res.render('register')
        }
        passport.authenticate('local')(req,res, () => {
            req.flash('success', 'Successfully signed up! Nice to meet you ' + req.body.username)
            res.redirect('/chat')
        })
    })
})

router.get('/logout', (req,res) => {
    res.logout()
    req.flash('success', 'See you later!')
    res.redirect('/')
})



module.exports = router