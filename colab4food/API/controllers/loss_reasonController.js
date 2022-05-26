const db = require('../models/indexModels');

const LossReason = db.loss_reason;

const getAllLossReasons = async (req, res) => {
  res.send(await LossReason.findAll());
};

module.exports = {
  getAllLossReasons,
};
