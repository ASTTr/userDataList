const UserModel = require("../model/userModel");

const addUser = async (body) => {
  try {
    const findUser = await UserModel.findOne({ email: body.formdata.email });
    if (findUser) return { message: "email already exists !", Success: 0 };
    else await UserModel.create(body.formdata);
    return { message: "User Registered Successfully", Success: 1 };
  } catch (err) {
    console.error(err);
  }
};

const getUsers = async () => {
  try {
    const users = await UserModel.find({});
    return { users: users };
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getUsers,
  addUser,
};
