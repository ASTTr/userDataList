const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
  stateName: { type: String },
  CountryName: { type: String },
});

const StateModel = mongoose.model("states", StateSchema);
module.exports = StateModel;
