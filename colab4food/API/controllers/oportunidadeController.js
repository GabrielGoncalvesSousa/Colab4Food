const db = require('../models/indexModels');

const Oportunidade = db.oportunidade;

const getAllOportunidades = async (req, res) => {
  res.send(await Oportunidade.findAll());
};

module.exports = {
  getAllOportunidades,
};
