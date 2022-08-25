const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc Auth with google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile'] }))

// @desc Google auth callback
// @route GET /auth/google/callback (main.ejs i think for my project?)
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), 
(req,res) => {
    res.redirect('/main')
    }
)

//@desc Logout user
//@route /auth/logout

// from tutorial - did not work

// router.get('/logout', (req,res) => {
//     req.logout()
//     res.redirect('/')
// })

// from updated stack-overflow, seems to be working
router.get('/logout',(req, res, next) => {
    req.logout(err => {
      if (err) {
         return next(err); 
    }
      res.redirect('/');
    });
  });

module.exports = router