const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    ancestry: {
        type: String
    },
    heritage: {
        type: String
    },
    background: {
        type: String
    },
    ancestryAbility: {
        type: String
    },
    class: {
        type: String
    },   

    //    finish adding all the info and how to connect char to user? 
})

module.exports = mongoose.model('Character', CharacterSchema)