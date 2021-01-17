const path = require("path");
const router = require("express").Router();
const CarInfoRoutes = require("./cars");

//Get the cars from the seed file
router.use("/api", CarInfoRoutes);

module.exports = router;