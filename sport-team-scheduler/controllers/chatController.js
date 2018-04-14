const db = require("../models/");

module.exports = {
  // Only return one message from each conversation to display as snippet
  getConversationsByUser: function(req, res) {
    db.Conversation
      .find({ participants: req.params.id })
      .then(dbModel => {
        console.log(dbModel);
        res.send(dbModel);
      })
      .catch(err => res.status(422).send(err));
  },

  getConversation: function(req, res) {
    db.Message
      .findOne({ _id: req.params.id })
      .then(dbModel => {
        console.log(dbModel);
        res.send(dbModel);
      })
      .catch(err => res.status(400).send(err));
  }
};




    
