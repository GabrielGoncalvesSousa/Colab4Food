const router = require('express').Router();

let processo_contactoRouter = (processo_contactoController) => {
  let getAllProcessosContacto = processo_contactoController.getAllProcessosContacto;
  router.get('/getAllProcessosContacto', getAllProcessosContacto);
  return router;
};

module.exports = processo_contactoRouter;
