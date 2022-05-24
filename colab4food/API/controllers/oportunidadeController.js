const db = require('../models');

const Oportunidade = db.oportunidade;

const getAllOportunidades = async (req, res) => {
  res.send(await Oportunidade.findAll());
};

module.exports = {
  getAllOportunidades,
};
