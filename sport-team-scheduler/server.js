const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sport-team-scheduler"
);

// Socket.io set-up
const server = require("http").Server(app);
const io = module.exports.io = require("socket.io")(server);

const SocketManager = require("./socketmanager/SocketManager");

io.on("connection", SocketManager)
  console.log("A user connected");

server.listen(PORT, () => {
  console.log("Connected to port:" + PORT);
});






