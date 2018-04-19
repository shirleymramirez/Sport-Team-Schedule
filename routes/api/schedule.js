const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/users"
router.route("/schedules")
	.post(scheduleController.create);

// router.route("/schedule")
// 	.post(scheduleController.findbyUserName);

router.get("/schedules", scheduleController.findAll);

module.exports = router;