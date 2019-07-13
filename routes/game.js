const express = require('express');
const router = express.Router();
const {loggedIn} = require('../middleware/auth');

/*
Route:       GET game/
Description: Path to create or join a game
Access:      Private
*/
router.get('/', loggedIn, (req, res) => {
  res.send('Game page');
});

module.exports = router;