const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/schedules"
router.route("/schedules")
	.post(scheduleController.create);

<<<<<<< HEAD
// displaying the schedules
=======
>>>>>>> 916bc10eca43d77bfc77e789ad9a179b2e1902a7
router.route("/schedules")
	.get(scheduleController.findAll);

module.exports = router;