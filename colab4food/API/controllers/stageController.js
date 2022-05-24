const db = require('../models');

const Stage = db.stage;

const getAllStages = async (req, res) => {
  res.send(await Stage.findAll());
};

module.exports = {
  getAllStages,
};
