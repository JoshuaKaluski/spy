const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleID: String,
  profilePic: String
});

module.exports = User = mongoose.model('users', UserSchema);