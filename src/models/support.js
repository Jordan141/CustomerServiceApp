const mongoose = require('mongoose')
const passportLocalSchema = require('passport-local-mongoose')

const supportSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar: {type: String, default: '' },
    firstName: String,
    lastName: String,
    email: String,
    rating: {type: Number, default: 1},
    bio: {type: String, default: 'Employee has yet to write a bio...'},
    department: String,
    verified: {type: Boolean, default: false}
})

supportSchema.plugin(passportLocalSchema)

module.exports = mongoose.model('Support', supportSchema)