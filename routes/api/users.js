const router = require("express").Router();
const usersController = require("../../controllers/usersController");

	router.route("/parent/signup")
		.post(usersController.create);

	router.route("/coach/signup")
		.post(usersController.create);

	router.route("/parent/login")
		.post(usersController.findbyUserName);
	
	router.route("/coach/login")
		.post(usersController.findbyUserName);

	router.route("/users")
		.get(usersController.findAll);


module.exports = router;
