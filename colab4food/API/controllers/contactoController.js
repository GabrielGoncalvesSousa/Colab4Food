const db = require('../models/indexModels');

const Contacto = db.contacto;

const getAllContactos = async (req, res) => {
  res.send(await Contacto.findAll());
};

module.exports = {
  getAllContactos,
};
