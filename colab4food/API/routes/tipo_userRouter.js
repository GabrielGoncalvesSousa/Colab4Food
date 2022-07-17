const router = require('express').Router();

let tipo_userRouter = (tipo_userController) => {
  console.log(tipo_userController);
  let getAllTiposUser = tipo_userController.getAllTiposUser;
  router.get('/getAllTiposUser', getAllTiposUser);

  // let getTipoUserByUserId = tipo_userController.getTipoUserByUserId;
  // router.get('/getTipoUserByUserId=:id_user', getTipoUserByUserId);

  let getTipoUserByUserId = tipo_userController.getTipoUserByUserId;
  router.get('/getTipoUserByUserId', getTipoUserByUserId);
  return router;
};

module.exports = tipo_userRouter;
