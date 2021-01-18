const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
    image: { 
        type: String, 
        },
    carid: { 
        type: Number, 
    },
    maker: {
        type: String
    },
    model: {
        type: String
    },
    kilometers: {
        type: String
    },
    name: {
        type:String
    },
    date: { 
        type: Date, 
    },
    description: {
        type: String
    }
});

const Cars = mongoose.model("Cars", carSchema);

module.exports = Cars;