const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;

passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_OAUTH2_CLIENT_ID,
    clientSecret: process.env.GITHUB_OAUTH2_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
},
function(accessToken, refresh, profile, done) {
    console.log(profile);
}));

module.exports = passport;