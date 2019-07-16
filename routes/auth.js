const express = require('express');
const router = express.Router();
const passport = require('passport');

const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"]
});

const addSocketIdToSession = (req, res, next) => {
  req.session.socketId = req.query.socketId;
  next();
};

/*
Route:       GET auth/google
Description: Start Google OAuth process
Access:      Public
*/
router.get('/google', addSocketIdToSession, googleAuth);

/*
Route:       GET auth/google/callback
Description: Callback from Google OAuth process
Access:      Private
*/
router.get(
  "/google/callback",
  googleAuth,
  (req, res) => {
    console.log(req.user);
    //CHANGE BEFORE PROD
    res.redirect('http://localhost:3000/game');
  }
);

/*
Route:       GET auth/logout
Description: Logout user
Access:      Private
*/
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/')
});

/*
Route:       GET auth/me
Description: Send current user's profile
Access:      Private
*/
router.get('/me', (req, res) => {
  let user = req.user;
  res.send(user);
});

module.exports = router;