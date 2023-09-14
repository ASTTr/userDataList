const router = require("express").Router();
const locationController = require("../controllers/locationController");

router.get("/countries", locationController.countries);
router.get("/states", locationController.states);
router.get("/cities", locationController.cities);

module.exports = router;
