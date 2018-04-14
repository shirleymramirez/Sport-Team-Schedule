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
const routes = require("./routes/");
const SocketManager = require("./socketmanager/SocketManager");
const app = express();

const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// Serve up static assets
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// routes for handlebars
var users = require("./routes/api/users");
app.use('/users', users);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/sport-team-scheduler"
);
var db = mongoose.connection;

// Socket.io set-up
const server = require("http").Server(app);
const io = module.exports.io = require("socket.io")(server);
io.on("connection", SocketManager);

// handebars engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// routes for handlebars
var users = require("./routes/api/users");
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
server.listen(PORT, () => {
  console.log("Connected to port:" + PORT);
});





