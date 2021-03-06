const router = require("express").Router();
const rosterController = require("../../controllers/rosterController");

// matched to api(add)
router.route("/rosters")
	.post(rosterController.create);
// displaying(show)
router.route("/rosters")
	.get(rosterController.findAll);

module.exports = router;