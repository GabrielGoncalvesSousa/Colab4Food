const db = require('../models');

const Tipo_user = db.tipo_user;

const addTipoUser = async (req, res) => {
  let info = req.body.tipo_user;
  const tipo_user = await Tipo_user.create(info);
  res.status(200).send(tipo_user);
};

const getALLTipoUser = async (req, res) => {
  console.log('yoo');
  let tipoUser = await Tipo_user.findAll();
  res.send(tipoUser);
};

module.exports = {
  addTipoUser,
  getALLTipoUser,
};
