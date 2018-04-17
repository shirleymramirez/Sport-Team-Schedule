const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rosterSchema = new Schema({
	name:{
		type: String,
		index:true
	},
	age:{
		type:String
	},
	team:{
		type:String
	}
});



const Roster = module.exports = mongoose.model('roster', rosterSchema);

module.exports = Roster;