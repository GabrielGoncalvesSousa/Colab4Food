const db = require('../models/indexModels');

const Stage = db.stage;

const getAllStages = async (req, res) => {
  res.send(await Stage.findAll());
};

module.exports = {
  getAllStages,
};
