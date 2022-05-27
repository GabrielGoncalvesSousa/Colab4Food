const router = require('express').Router();

let organizacaoRouter = (organizacaoController) => {
  let getAllOrganizacoes = organizacaoController.getAllOrganizacoes;
  router.get('/getAllOrganizacoes', getAllOrganizacoes);
  return router;
};

module.exports = organizacaoRouter;
