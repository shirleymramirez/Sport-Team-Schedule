const  express  = require('express');
const path = require("path");
const router = require("express").Router();
const chatRoutes = require("./api/chat");
const userRoutes = require("./api/users");
const scheduleRoutes = require("./api/schedules");

// API Routes
router.use("/api", chatRoutes);
router.use("/api", userRoutes);
router.use("/api", scheduleRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  console.log("App running at PORT " + PORT);
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
