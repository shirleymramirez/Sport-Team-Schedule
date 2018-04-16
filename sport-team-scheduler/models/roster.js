const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rosterSchema = new Schema({
	playersName:{
		type: String,
		index:true
	},
	playersAge:{
		type:String
	},
	Team:{
		type:String
	}
});



const Roster = module.exports = mongoose.model('roster', rosterSchema);

module.exports = Roster;