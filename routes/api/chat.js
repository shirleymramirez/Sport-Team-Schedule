const router = require("express").Router();
const ChatController = require("../../controllers/chatController");

  // View messages to and from authenticated user
  router.get("/messages", ChatController.findAll);

  module.exports = router;
