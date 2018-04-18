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
    db.schedule.find().then(dbModel => {
        console.log("All Schedules: " + dbModel);
        res.send(dbModel);
    });
  },
  create: function(req, res) {
    db.schedule
      .create(req.body)
      .then(dbModel => {
        console.log("Create: " + dbModel);
        res.send(dbModel);
      })
      .catch(err => res.status(422).send(err));
  }
}; 