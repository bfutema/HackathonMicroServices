const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/usersAuth", { useMongoClient: true });
mongoose.Promise = global.Promise;

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
