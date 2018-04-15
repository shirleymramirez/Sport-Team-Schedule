const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
	name:{
		type: String,
		index: true
	},
	kidsname:{
		type: String
	},
	phonenumber:{
		type:String
	},
	username:{
		type:String
	},
	password:{
		type: String
	},
	email:{
		type: String
	}
});

const User = module.exports = mongoose.model('user', userSchema);

module.exports = User;


// module.exports.createUser = function(newUser, CB){
// 	bcrypt.genSalt(10, function(err, salt) {
//     	bcrypt.hash(newUser.password, salt, function(err, hash) {
//         	newUser.password = hash;
//         	newUser.save(CB);
//     	});
// 	});
// }

