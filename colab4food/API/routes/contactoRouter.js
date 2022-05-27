const router = require('express').Router();

let contactoRouter = (contactoController) => {
  let getAllContactos = contactoController.getAllContactos;
  router.get('/getAllContactos', getAllContactos);
  return router;
};

module.exports = contactoRouter;
