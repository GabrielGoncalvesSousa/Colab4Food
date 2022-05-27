const router = require('express').Router();

let distritoRouter = (distritoController) => {
  let getAllDistritos = distritoController.getAllDistritos;
  router.get('/getAllDistritos', getAllDistritos);
  return router;
};

module.exports = distritoRouter;
