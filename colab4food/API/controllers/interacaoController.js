const db = require('../models');

const Interacao = db.interacao;

const getAllInteracoes = async (req, res) => {
  res.send(await Interacao.findAll());
};

module.exports = {
  getAllInteracoes,
};
