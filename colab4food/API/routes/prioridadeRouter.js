const router = require('express').Router();

let prioridadeRouter = (prioridadeController) => {
  let getAllPrioridades = prioridadeController.getAllPrioridades;
  router.get('/getAllPrioridades', getAllPrioridades);
  return router;
};

module.exports = prioridadeRouter;
