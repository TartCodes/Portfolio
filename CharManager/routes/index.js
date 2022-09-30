const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

const Character = require('../models/Character')

// @desc Login/Landing page
// @route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login')
})

// @desc main page 
// @route GET /charSheet
router.get('/charSheet', ensureAuth, async (req, res) => {
    try {
        const character = await Character.find({ user: req.user.id })
        console.log(req.user, 'please work')
        if(character.length !== 0){
            console.log(character, 'rendering if')
            res.render('charSheet', {characterData: character, user: req.user})  
        } else {
            console.log('render else')
            res.render('charSheet')  
        }       
    } catch (err) {
        console.error(err);
        res.render('errors/500')
    }    
})



module.exports = router