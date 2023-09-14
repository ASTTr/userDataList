const router = require("express").Router();

router.use("/users", require("./userRoutes"));
router.use("/locations", require("./locationRoutes"));

module.exports = router;
