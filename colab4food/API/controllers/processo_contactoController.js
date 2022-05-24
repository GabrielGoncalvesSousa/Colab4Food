const db = require('../models');

const ProcessoContacto = db.processo_contacto;

const getAllProcessosContacto = async (req, res) => {
  res.send(await ProcessoContacto.findAll());
};

module.exports = {
  getAllProcessosContacto,
};
