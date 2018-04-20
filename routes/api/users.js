const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/auth/signup")
	.post(usersController.create);

router.route("/auth/login").post(usersController.authenticate);

router.route("/users")
	.get(usersController.findAll);

module.exports = router;
