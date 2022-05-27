const router = require('express').Router();

let sourceRouter = (sourceController) => {
  let getAllSources = sourceController.getAllSources;
  router.get('/getAllSources', getAllSources);
  return router;
};

module.exports = sourceRouter;
