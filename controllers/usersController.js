const db = require("../models/");

module.exports = {
  authenticate: function(req, res) {
    console.log(req.body);
    passport.authenticate("local", {
      successRedirect: "/secret",
      failureRedirect: "/login"
    });
  },
  findAll: function(req, res) {
    db.Users.find().then(dbModel => {
      console.log("All Users: " + dbModel);
      res.send(dbModel);
    });
  },
  create: function(req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => {
        console.log("Create: " + dbModel);
        res.send(dbModel);
      })
      .catch(err => res.status(422).send(err));
  }
};