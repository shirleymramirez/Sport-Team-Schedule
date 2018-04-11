var express  = require('express');
const router = require("express").Router();

var User = require("../model/user");

router.get("/signup", function (req, res){
	res.render("signup");
});

router.get("/login", function (req, res){
	res.render("login");
})

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
});

module.exports = router;