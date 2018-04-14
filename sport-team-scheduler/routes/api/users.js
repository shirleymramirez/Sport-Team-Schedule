const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/signup")
	.post(usersController.create);

router.route("/login")
	.post(usersController.findbyUserName);

module.exports = router;
