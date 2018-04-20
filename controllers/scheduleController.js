const db = require("../models/");

module.exports = {
  // findbyschedule: function(req, res) {
  //   console.log(req.body);
  //   db.Schedule.find({ username: req.body.username }).then(dbModel => {
  //     if (!dbModel && typeof dbModel === "object") {
  //       res.status(404).send(err);
  //     } else {
  //       console.log("login info:" + dbModel);
  //       res.send(dbModel);
  //     }
  //   });
  // },
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