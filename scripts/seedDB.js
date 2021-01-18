const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/cars"
);

const carsSeed = [
  {
    image: "The Dead Zone",
    carid: 3340,
    maker: "Nissan",
    model: "Versa",
    kilometers: "",
    name:"",
    estimatedate: "2021/12/01",
    description: "change of suspension"
  },
  {
    image: "The Dead Zone",
    carid: 3341,
    maker: "Honda",
    model: "CR-V",
    kilometers:"",
    name:"",
    estimatedate: "",
    description: "motor adjustment"
  },
  {
    image: "The Dead Zone",
    carid: 3342,
    maker: "Honda",
    model: "Civic",
    kilometers: 90000,
    name:"",
    estimatedate: "",
    description: "engine tunning"
  },
  {
    image: "The Dead Zone",
    carid: 3343,
    maker: "Volkswagen",
    model: "Tiguan",
    kilometers: 13500,
    name:"",
    estimatedate: "",
    description: "oil change"
  },
  {
    image: "The Dead Zone",
    carid: 3344,
    maker: "Nissan",
    model: "Sentra",
    kilometers: 6000,
    name:"",
    estimatedate: "",
    description: "change of pads"
  },
  {
    image: "The Dead Zone",
    carid: 3345,
    maker: "Volkswagen",
    model: "Vento",
    kilometers: 80050,
    name:"",
    estimatedate: "",
    description: "change of pads"
  },
  {
    image: "The Dead Zone",
    carid: 3346,
    maker: "Chevrolet",
    model: "Aveo NG",
    kilometers: 33460,
    name:"",
    estimatedate: "2021/09/07",
    description: "change transmission (CVT)"
  },
  {
    image: "The Dead Zone",
    carid: 3347,
    maker: "Chevrolet",
    model: "Spark",
    kilometers: 16098,
    name:"",
    estimatedate: "",
    description: "change lights"
  }
];

db.Car
  .remove({})
  .then(() => db.Car.collection.insertMany(carsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});