const router = require('express').Router();

let interacaoRouter = (interacaoController) => {
  let getAllInteracoes = interacaoController.getAllInteracoes;
  router.get('/getAllInteracoes', getAllInteracoes);
  return router;
};

module.exports = interacaoRouter;
