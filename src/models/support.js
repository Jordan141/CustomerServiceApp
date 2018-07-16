const mongoose = require('mongoose')
const passportLocalSchema = require('passport-local-mongoose')

const supportSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: {type: String, default: '' },
    firstName: String,
    lastName: String,
    email: String,
    rating: Number
})

supportSchema.plugin(passportLocalSchema)

module.exports = mongoose.model('Support', supportSchema)