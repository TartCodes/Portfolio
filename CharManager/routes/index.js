const express = require('express')
const router = express.Router()

// @desc Login/Landing page
// @route GET /
router.get('/', (req, res) => {
    res.render('login')
})

// @desc main page 
// @route GET /main (main.ejs i think for my project?)
router.get('/main', (req, res) => {
    res.render('Main')
})



module.exports = router