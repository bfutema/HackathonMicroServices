const express = require("express");
const Message = require("../models/message");
const db = require('../database/index');
const Mongoosse = require('mongoose');

const rota = express.Router();

rota.post("/mensagem", async (rq, rs) => {
  rs.setHeader("Access-Control-Allow-Origin", "*");
  await Message.create(rq.body);
  rs.end(JSON.stringify({ ok: true, mensagem: "sem erros" }));
});

rota.get("/mensagens", async (rq, rs) => {
  rs.setHeader("Access-Control-Allow-Origin", "*");
  var mensagens = await Message.where();
  rs.end(JSON.stringify(mensagens));
});

module.exports = rota;
