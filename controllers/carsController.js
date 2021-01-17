const db = require("../models");

module.exports = {
    getCar: function(req,res) {
        db.Car.find()
        .then(dbCars => {
            res.json(dbCars);
        });
        //res.json("HOLA");
    }
};