const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/saveUser", userController.addUser);
router.get("/getUsers", userController.getUsers);

module.exports = router;
