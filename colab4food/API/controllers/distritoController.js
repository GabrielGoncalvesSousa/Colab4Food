const db = require('../models/indexModels');

const Distrito = db.distrito;

const getAllDistritos = async (req, res) => {
  res.send(await Distrito.findAll());
};

module.exports = {
  getAllDistritos,
};
