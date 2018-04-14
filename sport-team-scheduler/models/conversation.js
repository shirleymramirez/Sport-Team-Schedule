const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema defines how chat messages will be stored in MongoDB
const ConversationSchema = new Schema({
  participants: [
    { type: Schema.Types.ObjectId, 
      ref: "User" 
    }
  ],
  date: { type: Date, default: Date.now }

});


const Conversation = mongoose.model("Conversation", ConversationSchema);
module.exports = Conversation;