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
    firstLore:{
        type: String
    },
    firstLoreB:{
        type: Number
    },
    secondLore:{
        type: String
    },
    secondLoreB:{
        type: Number
    },
    medicine:{
        type: Number
    },
    nature:{
        type: Number
    },
    occultism:{
        type: Number
    },
    performance:{
        type: Number
    },
    society:{
        type: Number
    },
    stealth:{
        type: Number
    },
    survival:{
        type: Number
    },
    thievery:{
        type: Number
    },                      //main container 
    charName:{
        type: String
    },
    playerName:{
        type: String
    },
    level:{
        type: String
    },
    xp:{
        type: String
    },  
   //checkbox here if you figure it out
    size:{
        type: String //drop down
    },
    alignment:{
        type: String //drop down
    },
    traits:{
        type: String //textarea
    },
    hp:{
        type: Number
    },
    currentHP:{
        type: Number
    },
    tempHP:{
        type: Number
    },
    //another checkbox
    //and another
    totalStr:{          //main stats
        type: Number
    },
    strMod:{
        type: Number
    },
    totalDex:{
        type: Number
    },
    dexMod:{
        type: Number
    },
    totalCon:{
        type: Number
    },
    conMod:{
        type: Number
    },
    totalInt:{
        type: Number
    },
    intMod:{
        type: Number
    },
    totalWis:{
        type: Number
    },
    widMod:{
        type: Number
    },
    totalCha:{
        type: Number
    },
    chaMod:{
        type: Number
    },
    resisitsImmunities:{
        type: String //textarea
    },
    conditions:{
        type: String //textarea
    },
    fortSave:{                //saving throws
        type: Number
    },
    fortMod:{
        type: Number
    },
    fortProf:{
        type: Number
    },
    fortItem:{
        type: Number
    },
    //checkbox for fort save prof
    reflexSave:{
        type: Number
    },
    reflexMod:{
        type: Number
    },
    reflexProf:{
        type: Number
    },
    reflexItem:{
        type: Number
    },
    //checkbox for reflex prof
    willSave:{
        type: Number
    },
    willMod:{
        type: Number
    },
    willProf:{
        type: Number
    },
    willItem:{
        type: Number
    },  









    
})

module.exports = mongoose.model('Character', CharacterSchema)