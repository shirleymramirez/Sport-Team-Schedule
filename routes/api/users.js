const router = require("express").Router();
const usersController = require("../../controllers/usersController");

module.exports = (passport) => {
// Matches with "/api/users"
	usersController.setPassport(passport);
	router.route("/auth/signup")
		.post(usersController.create);

	router.route("/auth/login").post(usersController.authenticate);

	router.route("/users")
		.get(usersController.findAll);
	return router;
};


