const router = require('express').Router();

let userRouter = (userController) => {
  let getAllUsers = userController.getAllUsers;
  router.get('/getAllUsers', getAllUsers);
  let getUserById = userController.getUserById;
  router.get('/getUserById/', getUserById);

  let login=userController.login
  router.post('/login/',login)

  return router;
};

module.exports = userRouter;
