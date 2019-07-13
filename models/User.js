const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleID: String,
  facebookID: String
});

module.exports = User = mongoose.model('users', UserSchema);