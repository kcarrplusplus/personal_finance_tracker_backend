const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_OAUTH2_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH2_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/google/callback"
},
function(accessToken, refresh, profile, done) {
    console.log(profile);
}));

module.exports = passport;