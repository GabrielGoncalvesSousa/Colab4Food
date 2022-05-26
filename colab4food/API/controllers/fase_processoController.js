const db = require('../models/indexModels');

const FaseProcesso = db.fase_processo;

const getAllFasesProcesso = async (req, res) => {
  res.send(await FaseProcesso.findAll());
};

module.exports = {
  getAllFasesProcesso,
};
