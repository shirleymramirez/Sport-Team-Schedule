const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/');
const SocketManager = require('./socketmanager/SocketManager');
const app = express();

const PORT = process.env.PORT || 3001;
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Production
app.use(express.static(path.join(__dirname, "client/build")));

// Serve up static assets
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Set up promises with mongoose
mongoose.Promise = global.Promise;

const MONGO_URL = process.env.MONGODB_URI || "mongodb://localhost/sport-team-scheduler";

mongoose.connect(MONGO_URL);

app.use(routes);

SocketManager(app, PORT);


