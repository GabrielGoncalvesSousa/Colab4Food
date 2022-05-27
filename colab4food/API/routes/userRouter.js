const router = require('express').Router();

let userRouter = (userController) => {
  let getAllUsers = userController.getAllUsers;
  router.get('/getAllUsers', getAllUsers);
  let getUserById = userController.getUserById;
  router.get('/getUserById:id_user', getUserById);
  return router;
};

module.exports = userRouter;
