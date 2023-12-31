const passport = require('passport');
const express = require('express');
const app = express();

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/profile');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/currentuser', (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/facebook', passport.authenticate('facebook', {
        profileFields: ['id', 'name'],
    }));

    app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res) => {
        res.redirect('/profile');
    });



};