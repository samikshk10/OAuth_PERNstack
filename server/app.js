const cookieSession = require("cookie-session");
const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
app.use(cors());

app.use(cookieSession({
    maxAge: 30 * 25 * 60 * 60 * 1000,
    keys: ['fdfvfgnhrfb']
}));

app.listen(8000, (req, res) => {
    console.log("successfully connected");
});

app.use(passport.initialize());
app.use(passport.session());