const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_APP_ID,
    consumerSecret: process.env.TWITTER_APP_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
},
function(accessToken, refresh, profile, done) {
    console.log(profile);
}));

module.exports = passport;