const mongoose = require("mongoose");

<<<<<<< HEAD
mongoose.connect("mongodb://localhost/messagesDatabase", { promiseLibrary: global.Promise });
=======
mongoose.connect("mongodb://localhost/messagesDatabase", {
  useMongoClient: true,
  promiseLibrary: global.Promise
});
>>>>>>> 7d38b906729945920475c5d9d7e73c93a2f806b0
mongoose.Promise = global.Promise;

module.exports = mongoose;
