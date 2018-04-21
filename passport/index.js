const passport  = require('passport')
const localStrategy = require('./localStrategy')
const User = require('../models/users')

console.log("Setup password with local strategy");
passport.use(localStrategy);

passport.serializeUser((user, cb) => {
    console.log(user);
    cb(null, user._id)
});

passport.deserializeUser((id, cb) => {
    User.find({_id: id}, 'name username', (err, user) => {
        console.log(user)
        cb(null, user)
    })
});

module.exports = passport;