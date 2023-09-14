const CountryModel = require("../model/countryModel");
const { countryListConstant } = require("../constants.js/countriesList");
const { citiesConstant } = require("../constants.js/citiesList");
const { statesConstant } = require("../constants.js/statesList");
const mongoose = require("mongoose");
const StateModel = require("../model/StateModel");
const cityModel = require("../model/cityModel");

(async function counrties() {
  console.log("Script Start.......");
  mongoose.connect("mongodb://127.0.0.1:27017/userDb");
  // TODO: Write Your Code Here.............
  for (let city of citiesConstant) {
    await cityModel({
      city: city.name,
      StateName: city.state,
    }).save();
  }
  for (let state of statesConstant) {
    await StateModel({
      stateName: state.name,
      CountryName: state.countryName,
    }).save();
  }
  for (const key in countryListConstant) {
    await CountryModel({
      country: countryListConstant[key],
      countryCode: key,
    }).save();
  }
  console.log("Script End.....");

  process.exit();
})();
