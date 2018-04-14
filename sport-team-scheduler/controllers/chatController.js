const db = require("../models/");

module.exports = {
  findAll: function(req, res) {
    db.Message
      .find()
      .then(dbModel => {
        console.log(dbModel);
        res.send(dbModel);
      });
  }
};




    
