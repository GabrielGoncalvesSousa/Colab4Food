const db = require('../models');

const TipoServico = db.tipo_servico;

const getAllTiposServico = async (req, res) => {
  res.send(await TipoServico.findAll());
};

module.exports = {
  getAllTiposServico,
};
