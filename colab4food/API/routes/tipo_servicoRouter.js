const router = require('express').Router();

let tipo_servicoRouter = (tipo_servicoController) => {
  let getAllTiposServico = tipo_servicoController.getAllTiposServico;
  router.get('/getAllTiposServico', getAllTiposServico);
  return router;
};

module.exports = tipo_servicoRouter;
