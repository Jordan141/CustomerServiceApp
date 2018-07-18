const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')
const Support = require('../models/support')
const {isLoggedIn} = require('../middleware')
const {ADMIN_SECRET_CODE} = require('../../config.json')
const SUPPORT_ROLE = 'support'
const USER_ROLE = 'user'

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

router.post('/register', (req,res) => {
    const {username, password, firstName, lastName, email, avatar, adminCode, userType} = req.body

    if(userType === SUPPORT_ROLE){
        const newSupport = new Support({
            username, password, firstName, lastName, email, avatar
        })
        Support.register(newSupport, password, (err, support) => {
            if(err){
                req.flash('error', err.message)
                return res.render('register')
            }
            passport.authenticate('local')(req,res, () => {
                req.flash('success', 'Successfully signed up! Nice to meet you ' + firstName)
                res.redirect('/support')
            })
        })
    }

    if(userType === USER_ROLE){
        let newUser = new User({username, password, firstName, lastName, email, avatar})
        if(adminCode === ADMIN_SECRET_CODE){
            newUser.isAdmin = true
        }
    
        User.register(newUser, req.body.password, (err, user) => {
            if(err){
                req.flash('error', err.message)
                return res.render('register')
            }
            passport.authenticate('local')(req,res, () => {
                req.flash('success', 'Successfully signed up! Nice to meet you ' + firstName)
                res.redirect('/support')
            })
        })
    }
})

router.get('/logout', (req,res) => {
    res.logout()
    req.flash('success', 'See you later!')
    res.redirect('/')
})



module.exports = router