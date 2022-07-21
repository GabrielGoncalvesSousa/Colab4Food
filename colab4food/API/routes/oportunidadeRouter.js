const router = require('express').Router();

let oportunidadeRouter = (oportunidadeController) => {
  let getAllOportunidades = oportunidadeController.getAllOportunidades;
  router.get('/getAllOportunidades', getAllOportunidades);
  return router;
};

module.exports = oportunidadeRouter;
