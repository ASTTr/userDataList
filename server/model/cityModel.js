const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
  city: { type: String },
  StateName: { type: String },
});

const cityModel = mongoose.model("cities", citiesSchema);
module.exports = cityModel;
