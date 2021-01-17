const router = require("express").Router();
const carRoutes = require("./getCars");

router.use("/getInfoCars", carRoutes);

module.exports = router;