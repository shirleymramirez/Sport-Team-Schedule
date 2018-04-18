const router = require("express").Router();
const rosterController = require("../../controllers/rosterController");

// matched to api
router.route("/add")
	.post(rosterController.create);
// displaying 
router.route("/show")
	.get(rosterController.findAll);

module.exports = router;