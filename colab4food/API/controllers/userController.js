const sequelize = require('../models/index');

const db = sequelize.models;

const getAllUsers = async (req, res) => {
  // res.send(await db.user.findAll());
  await db.user
    .create({
      id_tipoUser: 1,
      nomeUser: 'João',
      email: 'dd',
      username: 'dd',
      password: 'dd',
    })
    .then((response) => {
      res.send(response);
    });
};

const getUserById = async (req, res) => {
  try {
    return await db.user
      .findAll({
        where: {
          id_user: req.params.id_user,
        },
      })
      .then((response) => {
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
