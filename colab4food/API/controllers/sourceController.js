const db = require('../models/indexModels');

const Source = db.source;

const getAllSources = async (req, res) => {
  res.send(await Source.findAll());
};

module.exports = {
  getAllSources,
};
