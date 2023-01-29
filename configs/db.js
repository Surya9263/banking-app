const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = () => {
  return mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
};

module.exports = connect;
