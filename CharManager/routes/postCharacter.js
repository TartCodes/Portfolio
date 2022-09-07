// not sure if i need this PAGE
const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')
const Character = require('../models/Character')

// @desc Show character data?
// @route GET /charSheet
router.get('/', ensureAuth, async (req, res) => {
    console.log(req.user)
    try {
    const character = await Character.find({userId:req.user._id})
    res.render('charSheet', {character: character, user: req.user})    
    } catch(err){
        console.log(err)
    }
})

// @desc process form?
// @route POST /charsheet
router.post('/', ensureAuth, async (req, res) => {
    console.log(req.body);
    try {
        req.body.user = req.user.id    //not sure about this 
        await Character.create(req.body)
        res.redirect('/charSheet')
    } catch (err) {
        console.error(err);
        res.render('errors/500')
    }
})






module.exports = router