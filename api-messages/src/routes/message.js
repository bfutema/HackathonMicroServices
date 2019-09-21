const express = require("express");
const Message = require("../models/message");

const rota = express.Router();

app.post("/mensagem", (rq, rs) => {
  rs.setHeader("Access-Control-Allow-Origin", "*");
  Message.insert(rq.body);
  rs.end(JSON.stringify({ ok: true, mensagem: "sem erros" }));
});

app.get("/mensagens", (rq, rs) => {
  rs.setHeader("Access-Control-Allow-Origin", "*");
  rs.end(JSON.stringify(Message.find({})));
});

module.exports = rota;
