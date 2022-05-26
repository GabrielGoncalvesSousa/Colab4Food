const db = require('../models/indexModels');

const TipoOrganizacao = db.tipo_organizacao;

const getAllTiposOrganizacao = async (req, res) => {
  res.send(await TipoOrganizacao.findAll());
};

module.exports = {
  getAllTiposOrganizacao,
};
