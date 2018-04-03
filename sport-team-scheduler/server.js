const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
console.log(process.env.PORT);
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sport-team-scheduler"
);

//Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// const server = require("http").createServer();
// const io = require("socket.io")(server);

// io.on("connection", function(client) {
//   client.on("register", handleRegister);

//   client.on("join", handleJoin);

//   client.on("leave", handleLeave);

//   client.on("message", handleMessage);

//   client.on("chatrooms", handleGetChatrooms);

//   client.on("availableUsers", handleGetAvailableUsers);

//   client.on("disconnect", function() {
//     console.log("client disconnect...", client.id);
//     handleDisconnect();
//   });

//   client.on("error", function(err) {
//     console.log("received error from client:", client.id);
//     console.log(err);
//   });
// });






