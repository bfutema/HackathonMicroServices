const express = require("express");
const Message = require("../models/message");

const rota = express.Router();

rota.post("/mensagem", async (rq, rs) => {
  rs.setHeader("Access-Control-Allow-Origin", "*");
  await Message.create(rq.body);
  rs.json({ success: true, mensagem: "sem erros" });
});

rota.get("/mensagens", async (rq, rs) => {
  rs.setHeader("Access-Control-Allow-Origin", "*");
  rs.json(await Message.where({}));
});

module.exports = rota;
