// const apiRoutes = require("express").Router();
const chatRoutes = require("express").Router();
const ChatController = require("../../controllers/chatController");

  // Set chat routes as a subgroup/middleware to apiRoutes
  chatRoutes.use("/chat", chatRoutes);

  // View messages to and from authenticated user
  chatRoutes.get("/", ChatController.getConversations);

  // Retrieve single conversation
  chatRoutes.get("/:conversationId", ChatController.getConversation);

  // Send reply in conversation
  chatRoutes.post("/:conversationId", ChatController.sendReply);

  // Start new conversation
  chatRoutes.post("/new/:recipient", ChatController.newConversation);

  module.exports = chatRoutes;
