const router = require("express").Router();
const carsController = require("../../controllers/carsController");

router.route("/car").get(carsController.getCar);

module.exports = router;