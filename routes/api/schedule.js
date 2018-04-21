const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/schedules"
router.route("/schedules")
	.post(scheduleController.create);

router.route("/schedules")
	.get(scheduleController.findAll);

module.exports = router;