const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/usersAuth', { promiseLibrary: global.Promise });
mongoose.Promise = global.Promise;

module.exports = mongoose;