const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  code: String,
  amount: Number,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
