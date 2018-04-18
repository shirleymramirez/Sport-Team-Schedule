const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/users"
router.route("/schedule")
	.post(scheduleController.create);

// router.route("/schedule")
// 	.post(scheduleController.findbyUserName);

router.route("/schedule")
	.get(scheduleController.findAll);

module.exports = router;