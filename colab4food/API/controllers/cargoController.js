const sequelize = require('../models/index');

const db = sequelize.models;

const getAllCargos = async (req, res) => {
  //res.send(await db.cargo.findAll());
  res.send(await db.user.findAll());
};

module.exports = {
  getAllCargos,
};
