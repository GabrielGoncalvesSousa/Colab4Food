const db = require('../models');

const Cargo = db.cargo;

const getAllCargos = async (req, res) => {
  res.send(await Cargo.findAll());
};

module.exports = {
  getAllCargos,
};
