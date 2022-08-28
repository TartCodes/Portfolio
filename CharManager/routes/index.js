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
        res.render('CharSheet', {
            name: req.user.firstName,
            character
        })
    } catch (err) {
        console.error(err);
        res.render('errors/500')
    }    
})



module.exports = router