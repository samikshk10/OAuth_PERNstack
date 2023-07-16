const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
require("dotenv").config();
const {
    User
} = require("./models/user.js")
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
})


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLECLIENTID,
    clientSecret: process.env.GOOGLECLIENTSECRET,
    callbackURL: '/auth/google/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => {

    User.findOne({
            googleId: profile.id
        })
        .then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);
            } else {
                new User({
                        googleId: profile.id
                    }).save()
                    .then((user) => done(null, user));
            }
        })

}));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOKCLIENTID,
    clientSecret: process.env.FACEBOOKCLIENTSECRET,
    callbackURL: '/auth/facebook/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => {

    User.findOne({
            facebookId: profile.id
        })
        .then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);
            } else {
                new User({
                        facebookId: profile.id
                    }).save()
                    .then((user) => done(null, user));
            }
        })

}));