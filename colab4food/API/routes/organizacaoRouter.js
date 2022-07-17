const router = require('express').Router();

let organizacaoRouter = (organizacaoController) => {
  let getAllOrganizacoes = organizacaoController.getAllOrganizacoes;
  router.get('/organizacao', getAllOrganizacoes);

  let getAllOrgsWithPriority = organizacaoController.getAllOrganizacoesWithPriority;
  router.get('/getAllOrgsWithPriority', getAllOrgsWithPriority)
  return router;
};

module.exports = organizacaoRouter;
