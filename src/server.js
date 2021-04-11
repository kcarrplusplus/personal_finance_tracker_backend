const _ = require('dotenv/config');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

// local libraries
const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });
// authorization setup with sessions and passport
app.use(session({
    secret: process.env.LOCAL_SECRET,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

const apiPrefix = '/api/v1';

app.use(`${apiPrefix}/auth`, routes.auth);
app.use(`${apiPrefix}/users`, routes.users);
app.use(`${apiPrefix}/transactions`, routes.transactions);

app.listen(process.env.PORT, () => {
    console.log(`Personal Fin Tracker app running on port ${process.env.PORT}`);
});