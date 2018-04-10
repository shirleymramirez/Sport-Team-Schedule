var express  = require('express');
const router = require("express").Router();

var User = require("../model/user"); 

// register user 
router.post('/register', function(req, res){
	console.log(req.body);

	var username = req.body.username;
	var name = req.body.name;
	var kidsName = req.body.kidsName;
	var email = req.body.email;
	var number = req.body.number;
	var password = req.body.password;
	var password2 =req.body.password2;


	// // val 
	// req.checkBody('name', 'Name is required').notEmpty();
	// req.checkBody('kidsName', 'kidsName is required').notEmpty();
	// req.checkBody('email', 'Email is required').notEmpty();
	// req.checkBody('email', 'Email is not valid').isEmail();
	// req.checkBody('number', 'your number is required')
	// req.checkBody('password', 'Password is required').notEmpty();
	// req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
	// var errors = req.validationErrors();

		// var newUser = new User({
		// 	name: name,
		// 	kidsname: kidsname,
		// 	email: email,
		// 	number: number
		// 	username: username,
		// 	password: password
		// });

		// User.createUser(newUser, function(err, user){
		// 	if(err) throw err;
		// 	console.log(user);
		// });
		// req.flash('success_msg', "you are registered");	

});