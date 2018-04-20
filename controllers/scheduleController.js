const db = require("../models/");

module.exports = {
  findAll: function(req, res) {
    db.Schedule.find().then(dbModel => {
        console.log("All Schedules: " + dbModel);
        res.send(dbModel);
    });
  },
  create: function(req, res) {
    db.Schedule
      .create(req.body)
      .then(dbModel => {
        console.log("Create: " + dbModel);
        res.send(dbModel);
      })
      .catch(err => res.status(422).send(err));
  }
}; 
