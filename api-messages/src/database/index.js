const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/messagesDatabase", { promiseLibrary: global.Promise });
mongoose.Promise = global.Promise;

module.exports = mongoose;
