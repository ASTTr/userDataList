const userManager = require("../managers/userManager");

const addUser = (req, res) => {
  userManager
    .addUser(req.body)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

const getUsers = (req, res) => {
  userManager
    .getUsers()
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
};

module.exports = {
  addUser,
  getUsers,
};
