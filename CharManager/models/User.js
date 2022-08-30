const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: { //shows first and last name
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now //automatically puts the date and time
    },
    character: {
        charName: {
            type: String
        }
    }  
})

module.exports = mongoose.model('User', UserSchema)