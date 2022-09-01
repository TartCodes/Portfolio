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
    backgroundAbility: {
        type: String
    },
    deity: {
        type: String
    },
    acrobatics: { //skills
        type: String
    },
    arcana: {
        type: String
    },
    athletics: {
        type: String
    },
    crafting: {
        type: String
    },
    deception: {
        type: String
    },
    diplomacy: {
        type: String
    },
    intimidation: {
        type: String
    },
    firstLore: {
        type: String
    },
    firstLoreB: {
        type: String
    },
    secondLore: {
        type: String
    },
    secondLoreB: {
        type: String
    },
    medicine: {
        type: String
    },
    nature: {
        type: String
    },
    occultism: {
        type: String
    },
    performance: {
        type: String
    },
    society: {
        type: String
    },
    stealth: {
        type: String
    },
    survival: {
        type: String
    },
    thievery: {
        type: String
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
    }










    
})

module.exports = mongoose.model('Character', CharacterSchema)