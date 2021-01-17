const path = require("path");
const router = require("express").Router();
const CarRoutes = require("./cars");

//Get the cars from the seed file
router.use("/api", CarRoutes);

module.exports = router;