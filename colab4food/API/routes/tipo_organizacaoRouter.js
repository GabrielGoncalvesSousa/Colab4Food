const router = require('express').Router();

let tipo_organizacaoRouter = (tipo_organizacaoController) => {
  let getAllTiposOrganizacao = tipo_organizacaoController.getAllTiposOrganizacao;
  router.get('/getAllTiposOrganizacao', getAllTiposOrganizacao);
  return router;
};

module.exports = tipo_organizacaoRouter;
