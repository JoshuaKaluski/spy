const express = require('express');
const router = express.Router();
const passport = require('passport');

/*
Route:       GET auth/google
Description: Start Google OAuth process
Access:      Public
*/
router.get('/google', passport.authenticate("google", {
  scope: ["profile", "email"]
}));

/*
Route:       GET auth/google/callback
Description: Callback from Google OAuth process
Access:      Private
*/
router.get(
  "/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect('/game');
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
Route:       GET auth/api/me
Description: Send current user's profile
Access:      Private
*/
router.get('/me', (req, res) => {
  res.send(req.user);
});

module.exports = router;