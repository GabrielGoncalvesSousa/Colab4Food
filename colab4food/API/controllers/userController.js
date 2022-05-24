const db = require('../models');

const User = db.user;

const getAllUsers = async (req, res) => {
  res.send(await User.findAll());
};

const getUserById = async (req, res) => {
  try {
    return await User.findAll({
      where: {
        id_user: req.params.id_user,
      },
    }).then((response) => {
      if (response.length === 0) {
        throw ' No matches';
      } else {
        res.send(response);
      }
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
};
