const db = require("../models/");

module.exports = {
    findbyUserName: function(req, res){
        console.log(req.body);
        db.Users
            .find({username: req.body.username})
            .then(dbModel => {
                if (!dbModel && typeof dbModel === "object" ){
                    res.status(404).send(err);
                } else {
                    res.send(dbModel);
                    console.log("login info:" + dbModel);
                    
                }
            }
        )
    },
    create: function(req, res){
        db.Users
          .create(req.body) 
          .then(dbModel => {
              console.log(dbModel);
              res.send(dbModel);
          })
          .catch(err => res.status(422).send(err));
    }
}