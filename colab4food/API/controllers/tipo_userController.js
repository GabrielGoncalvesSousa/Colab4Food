const sequelize = require('../models/indexModels');
db = sequelize.models;

const Tipo_user = db.tipo_user;

const addTipoUser = async (req, res) => {
  let info = req.body.tipo_user;
  const tipo_user = await Tipo_user.create(info);
  res.status(200).send(tipo_user);
};

const getAllTiposUser = async (req, res) => {
  console.log('yoo');
  let tipoUser = await Tipo_user.findAll();
  res.send(tipoUser);
};

const getTipoUserByUserId = async (req, res) => {
  // console.log('A VER DB');
  // console.log(Object.entries(db));
  // console.log('DODSAAED');
  // console.log('A VER SEQUELIZE');
  // console.log(Object.entries(db.config));
  // console.log(Object.entries(db.models.user.associations));
  let omg = require('../teste');
  console.log('GOD HELP ME');
  // console.log(db);
  // console.log(typeof omg);
  // console.log(omg);
  // console.log(omg.humanosMerda);
  // res.send(omg.humanosFixes);
  // console.log(omg.humanosFixes[1]);

  // await db.sequelize.models.user
  //   .findOne({
  //     where: {
  //       id_user: req.params.id_user,
  //     },
  //     include: db.sequelize.tipo_user,
  //   })
  //   .then((response) => {
  //     res.send(response);
  //   });
  // let teste = {};

  // for (let i = 0; i < 4; i++) {
  //   teste[`lol${i}`] = i;
  // }
  // console.log(typeof teste);
  // res.send(Object.entries(teste));
};

module.exports = {
  addTipoUser,
  getAllTiposUser,
  getTipoUserByUserId,
};
