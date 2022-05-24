const db = require('../models');

const Organizacao = db.organizacao;

const getAllOrganizacoes = async (req, res) => {
  res.send(await Organizacao.findAll());
};

module.exports = {
  getAllOrganizacoes,
};
