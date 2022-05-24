const db = require('../models');

const Contacto = db.contacto;

const getAllContactos = async (req, res) => {
  res.send(await Contacto.findAll());
};

module.exports = {
  getAllContactos,
};
