const router = require("express").Router();
const carRoutes = require("./getCars");

router.use("/getCars", carRoutes);

module.exports = router;