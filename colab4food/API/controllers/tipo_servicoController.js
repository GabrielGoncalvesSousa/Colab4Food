const db = require('../models/indexModels');

const TipoServico = db.tipo_servico;

const getAllTiposServico = async (req, res) => {
  res.send(await TipoServico.findAll());
};

module.exports = {
  getAllTiposServico,
};
