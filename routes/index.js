const  express  = require('express');
const path = require("path");
const router = require("express").Router();
const chatRoutes = require("./api/chat");
const userRoutes = require("./api/users");
const scheduleRoutes = require("./api/schedule");
const rosterRoutes = require("./api/roster");

module.exports = (passport) => {

  // API Routes
  router.use("/api", chatRoutes);
  router.use("/api", userRoutes(passport));
  router.use("/api", scheduleRoutes);
  router.use("/api", rosterRoutes);

// If no API routes are hit, send the React app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

  // If no API routes are hit, send the React app
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  return router;
};
