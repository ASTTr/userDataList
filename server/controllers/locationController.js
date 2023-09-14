const locationManager = require("../managers/locationManager");

const countries = (req, res) => {
  locationManager
    .countries()
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

const states = (req, res) => {
  locationManager
    .states(req.query)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

const cities = (req, res) => {
  locationManager
    .cities(req.query)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

module.exports = {
  countries,
  states,
  cities,
};
