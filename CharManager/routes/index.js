const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc Login/Landing page
// @route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login')
})

// @desc main page 
// @route GET /main (main.ejs i think for my project?)
router.get('/charSheet', ensureAuth, (req, res) => {
    res.render('CharSheet', {
        name: req.user.firstName,
    })
})



module.exports = router