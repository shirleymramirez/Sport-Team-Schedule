const db = require("../models/");

module.exports = {
<<<<<<< HEAD
=======

>>>>>>> 916bc10eca43d77bfc77e789ad9a179b2e1902a7
  findAll: function(req, res) {
    db.Schedule.find().then(dbModel => {
        console.log("All Schedules: " + dbModel);
        res.send(dbModel);
    });
  },
  create: function(req, res) {
    db.Schedule
      .create(req.body)
      .then(scheduleData => {
        console.log("Create: " + scheduleData);
        res.send(scheduleData);
      })
      .catch(err => res.status(422).send(err));
  }
}; 
