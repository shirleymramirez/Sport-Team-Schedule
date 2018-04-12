var mongoose = require('mongoose');
var bcrypt = require("bcryptjs");

var userSchema = mongoose.Schema({
	name:{
		type: String,
		index: true
	},
	Kidsname:{
		type: String
	},
	number:{
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

var User = module.exports = mongoose.model('user', userSchema);

module.exports.createUser = function(newUser, CB){
	bcrypt.genSalt(10, function(err, salt) {
    	bcrypt.hash(newUser.password, salt, function(err, hash) {
        	newUser.password = hash;
        	newUser.save(CB);
    	});
	});
}

