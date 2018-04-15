var mongoose = require('mongoose');
// var bcrypt = require("bcryptjs");

var scheduleSchema = mongoose.Schema({
	date:{
		type: String,
		index: true
	},
	place:{
		type: String
	},
	time:{
		type:String
	},
	snack:{
		type:String
	}
});

var Schedule = module.exports = mongoose.model('schedule', scheduleSchema);