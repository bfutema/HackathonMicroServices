const mongoose = require("mongoose");

<<<<<<< HEAD
mongoose.connect("mongodb://localhost/messagesDatabase", { promiseLibrary: global.Promise });
=======
mongoose.connect("mongodb://localhost/messagesDatabase", {
  useUnifiedTopology: true
});
>>>>>>> d873017b31edb2bca8fd75b28ab61d76de5ab6c2
mongoose.Promise = global.Promise;

module.exports = mongoose;
