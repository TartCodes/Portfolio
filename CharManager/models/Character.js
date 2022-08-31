const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
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
    charName: {
        type: String
    },

    //    finish adding all the info and how to connect char to user? 
})

module.exports = mongoose.model('Character', CharacterSchema)