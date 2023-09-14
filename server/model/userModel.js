const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  country: { type: String },
  state: { type: String },
  city: { type: String },
  gender: { type: String },
  dob: { type: String },
  age: { type: String },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
