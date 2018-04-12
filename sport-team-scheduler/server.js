const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var exphbs = require('express-handlebars');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
console.log(process.env.PORT);

const server = require("http").createServer();
const io = (module.exports.io = require("socket.io")(server));

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// routes for handlebars
var users = require("./routes/users");
app.use('/users', users);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sport-team-scheduler"
);
var db = mongoose.connection;

io.on('connection, SocketManager');
server.listen(PORT, () => {
  console.log("Connected to port:" + PORT);
});
// handebars engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// routes for handlebars
var users = require("./routes/users");
app.use('/users', users);

// express session 
app.use(session({
	secret:'secret',
	saveUninitialized: true,
	resave:true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// connect flash 
app.use(flash());
// var for flash 
app.use(function(req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
});

//Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


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






