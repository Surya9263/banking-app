const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  name: String,
  code: { type: String, unique: true },
  balance: Number,
});

const Account = mongoose.model("Account", accountSchema);
module.exports = Account;
