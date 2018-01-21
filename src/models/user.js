const mongoose = require('mongoose')
const passportLocalSchema = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: {type: String, default: '' },
    firstName: String,
    lastName: String,
    email: String,
    bio: String,
    isAdmin: {type: Boolean, default : false}
})

userSchema.plugin(passportLocalSchema)

module.exports = mongoose.model('User', userSchema)