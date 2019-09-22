const express = require("express");
const routeMessage = require("./routes/message.js");
const bodyParser = require('body-parser');

const app = express();

<<<<<<< HEAD
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

=======
app.use(express.json());
>>>>>>> d873017b31edb2bca8fd75b28ab61d76de5ab6c2
app.use(routeMessage);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.listen(9001);
