const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/messagesDatabase", {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
