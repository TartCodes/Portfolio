const express = require('express')
const passport = require('passport')
const router = express.Router()
const authController = require('../controllers/auth')





// @desc Auth with google
// @route GET /auth/google
// router.get('/google', passport.authenticate('google', {scope: ['profile'] }))
router.get('/google', authController.getLogin)

// @desc Google auth callback
// @route GET /auth/google/callback 
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), 
// (req,res) => {
//     res.redirect('/charSheet')
//     }
// )

router.get('/google/callback', authController.getCallback)

//@desc Logout user
//@route /auth/logout

router.get('/logout', authController.logout)

module.exports = router