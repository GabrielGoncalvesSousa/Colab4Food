const router = require('express').Router();

let stageRouter = (stageController) => {
  let getAllStages = stageController.getAllStages;
  router.get('/getAllStages', getAllStages);
  return router;
};

module.exports = stageRouter;
