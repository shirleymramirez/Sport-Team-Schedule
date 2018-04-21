const db = require("../models/");

module.exports = {
  authenticate: function(req, res) {
    console.log("usercontroller log", req.body);
    this.passport.authenticate('local', function(req, res){
      console.log("passport user", req.user);
      res.send(dbModel)
      
    });
  },
  setPassport: passport => {
    this.passport = passport;
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
