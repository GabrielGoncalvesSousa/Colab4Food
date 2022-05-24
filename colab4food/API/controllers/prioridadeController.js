const db = require('../models');

const Prioridade = db.prioridade;

const getAllPrioridades = async (req, res) => {
  res.send(await Prioridade.findAll());
};

module.exports = {
  getAllPrioridades,
};
