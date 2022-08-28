// not sure if i need this PAGE
const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Character = require('../models/Character')

// @desc Show character data?
// @route GET /charSheet
router.get('/', ensureAuth, (req, res) => {
    res.render('charSheet')
})

// @desc process form?
// @route POST /charsheet
router.post('/', ensureAuth, async (req, res) => {
    console.log(req.body);
    try {
        req.body.user = req.user.id    //not sure about this - something like this for form save? but im not going to a different page
        await Character.create(req.body)
        res.redirect('/charSheet')
    } catch (err) {
        console.error(err);
        res.render('errors/500')
    }
})






module.exports = router