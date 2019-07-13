const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {googleClientID, googleClientSecret, googleRedirect} = require('../config/keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: googleRedirect,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      let existingUser = await User.findOne({googleID: profile.id});

      if (existingUser) {
        //Exit callback with existing User
        return done(null, existingUser);
      }

      //Create a new User if none exist
      let user = await new User({googleID: profile.id}).save();

      //Exit with new User
      done(null, user);
    }
  )
);