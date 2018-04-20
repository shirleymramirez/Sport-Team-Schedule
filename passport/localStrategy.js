const User = require("../models/users");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    username: "username"
  },
  function(username, password, done) {
    console.log("local Strategy " + username + " " + password );
    User.findOne({ "local.username": username }, (err, userMatch) => {
      if (err) {
        return done(err);
      }
      if (!userMatch) {
        return done(null, false, { message: "User not found" });
      }
      if (!userMatch.checkpassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, userMatch);
    });
  }
);

module.exports = strategy;
