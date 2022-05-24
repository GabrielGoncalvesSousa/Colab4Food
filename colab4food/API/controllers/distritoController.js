const db = require('../models');

const Distrito = db.distrito;

const getAllDistritos = async (req, res) => {
  res.send(await Distrito.findAll());
};

module.exports = {
  getAllDistritos,
};
