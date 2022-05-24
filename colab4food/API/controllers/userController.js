const db = require('../models');

const User = db.user;

const getAllUsers = async (req, res) => {
  res.send(await User.findAll());
};

module.exports = {
  getAllUsers,
};
