const express = require('express');
const cookieSession = require('cookie-session');
const http = require('http');
const socketio = require('socket.io');
const passport = require('passport');
const {cookieSecret} = require('./config/keys');
require('./auth/googleAuth');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

const app = express();
const server = http.createServer(app);

//Express config
app.use(
  cookieSession({
    maxAge: THIRTY_DAYS,
    keys: [cookieSecret]
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

//Connect MongoDB
connectDB();

//Socket connection
const io = socketio(server);
app.set('io', io);

//Define routes
app.use('/auth', require('./routes/auth'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));