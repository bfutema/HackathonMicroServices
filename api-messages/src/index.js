const express = require("express");
const routeMessage = require("./routes/message.js");
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(routeMessage);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.listen(9001);
