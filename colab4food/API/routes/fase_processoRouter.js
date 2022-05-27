const router = require('express').Router();

let fase_processoRouter = (fase_processoController) => {
  let getAllFasesProcesso = fase_processoController.getAllFasesProcesso;
  router.get('/getAllFasesProcesso', getAllFasesProcesso);
  return router;
};

module.exports = fase_processoRouter;
