const db = require("../models/");

//here we will add code to create 
// a kid on the roster and read and 
// display them on hte roster 
module.exports = {
	create: function (req, res) {
		console.log(req.body);
		db.Roster
			.create(req.body)
			.then(data => {
				console.log("added: " + data);
				res.send(data);
			})
			// .catch(err => res.status(422)send(err));
	}, //closes create
	findAll: function (req, res) {
		console.log(req.body);
		db.Roster.find().then(data => {
			console.log("the Team: " + data);
			res.send(data);
		});
	}
};