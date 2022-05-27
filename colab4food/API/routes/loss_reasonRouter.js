const router = require('express').Router();

let loss_reasonRouter = (loss_reasonController) => {
  let getAllLossReasons = loss_reasonController.getAllLossReasons;
  router.get('/getAllLossReasons', getAllLossReasons);
  return router;
};

module.exports = loss_reasonRouter;
