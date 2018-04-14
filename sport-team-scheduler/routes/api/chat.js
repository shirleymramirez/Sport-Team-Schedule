const router = require("express").Router();
const ChatController = require("../../controllers/chatController");

  // View messages to and from authenticated user
  router.get("/conversations/user/:id", ChatController.getConversationsByUser);

  // Retrieve single conversation
  router.get("/conversations/:id", ChatController.getConversation);

  module.exports = router;
