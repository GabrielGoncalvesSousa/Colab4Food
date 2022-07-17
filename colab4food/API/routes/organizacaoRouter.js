const router = require('express').Router();

let organizacaoRouter = (organizacaoController) => {
  let getAllOrganizacoes = organizacaoController.getAllOrganizacoes;
  router.get('/organizacao', getAllOrganizacoes);

  let getAllOrgsWithPriority = organizacaoController.getAllOrganizacoesWithPriority;
  router.get('/getAllOrgsWithPriority', getAllOrgsWithPriority)

  let getAllOrgsInfo = organizacaoController.getAllOrgInfo;
  router.get('/getAllOrgInfo', getAllOrgsInfo);
  return router;
};

module.exports = organizacaoRouter;
