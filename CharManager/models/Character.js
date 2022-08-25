const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    ancestry: {  //left side bar
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
    backgroundAbility: {   //textarea test
        type: String
    },
    deity: {
        type: String
    },
    acrobatics: { //skills
        type: Number
    },
    arcana: {
        type: Number
    },
    athletics: {
        type: Number
    },
    crafting: {
        type: Number
    },
    deception: {
        type: Number
    },
    diplomacy: {
        type: Number
    },
    intimidation: {
        type: Number
    },
    firstLore: {
        type: String
    },
    firstLoreB: {
        type: Number
    },
    secondLore: {
        type: String
    },
    secondLoreB: {
        type: Number
    },
    medicine: {
        type: Number
    },
    nature: {
        type: Number
    },
    occultism: {
        type: Number
    },
    performance: {
        type: Number
    },
    society: {
        type: Number
    },
    stealth: {
        type: Number
    },
    survival: {
        type: Number
    },
    thievery: {
        type: Number
    },                      //main container 
    charName: {
        type: String
    },
    playerName: {
        type: String
    },
    level: {
        type: String
    },
    xp: {
        type: String
    },
    size: {
        type: String,
        enum: ['tiny', 'small', 'medium', 'large', 'huge', 'gargantuan'],
        require: true
    },
    









    
})

module.exports = mongoose.model('Character', CharacterSchema)