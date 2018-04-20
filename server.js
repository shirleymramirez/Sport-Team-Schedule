const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var session = require('express-session');
const passport = require('./passport');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const routes = require('./routes/');
const SocketManager = require('./socketmanager/SocketManager');
const app = express();
const localStrategy = require('./passport/localStrategy');

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

passport.use(localStrategy);

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

const MONGO_URL = process.env.MONGODB_URI || "mongodb://localhost/sport-team-scheduler";

mongoose.connect(MONGO_URL);

// middleware
app.use(
  session({
    secret: process.env.APP_SECRET || "this is the default passphrase",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// passport log-in authentication
app.use(passport.initialize());
app.use(passport.session());

// routes for handlebars
var users = require("./routes/api/users");
app.use('/users', users);

SocketManager(app, PORT);

// handebars engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// routes for handlebars
var users = require("./routes/api/users");
app.use('/users', users);

