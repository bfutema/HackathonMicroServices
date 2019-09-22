const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/messagesDatabase", {
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
