const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var scheduleSchema = new Schema({
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

module.exports = Schedule;
