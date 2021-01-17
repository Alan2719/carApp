import axios from "axios";

export default {
  // Gets all books
  getInfo: function() {
    return axios.get("/api/getInfoCars/car");
  }
};
