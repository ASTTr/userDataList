const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  country: { type: String },
  countryCode: { type: String },
});

const countryModel = mongoose.model("country", countrySchema);

module.exports = countryModel;
