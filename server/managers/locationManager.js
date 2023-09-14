const CountryModel = require("../model/countryModel");
const CityModel = require("../model/cityModel");
const StateModel = require("../model/StateModel");

const countries = async () => {
  try {
    const countries = await CountryModel.find({});
    return countries;
  } catch (err) {
    console.error(err);
  }
};

const states = async (data) => {
  try {
    const statesList = await StateModel.find({ CountryName: data.code });
    return statesList;
  } catch (err) {
    console.error(err);
  }
};

const cities = async (data) => {
  try {
    console.log(data);
    const citiesList = await CityModel.find({ StateName: data.state });
    return citiesList;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  countries,
  states,
  cities,
};
