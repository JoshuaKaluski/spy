const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const {cookieSecret} = require('./config/keys');
require('./auth/googleAuth');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

const app = express();
app.use(
  cookieSession({
    maxAge: THIRTY_DAYS,
    keys: [cookieSecret]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Connect MongoDB
connectDB();

//Define routes
app.use('/auth', require('./routes/auth'));
app.use('/game', require('./routes/game'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));