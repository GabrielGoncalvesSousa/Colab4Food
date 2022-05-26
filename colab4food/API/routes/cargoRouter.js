// const cargoController = require('../controllers/cargoController');
// const cargoController = require('../controllers/indexController').indexController(sequelize.models).cargoController;
const router = require('express').Router();

// const sequelize = cargoController.sequelize;

// console.log(cargoControlle);
// let mainFunction = cargoController.mainFunction(sequelize.models);

let cargoRouter = (cargoController) => {
  let getAllCargos = cargoController.getAllCargos;
  router.get('/getAllCargos', getAllCargos);
  return router;
};

module.exports = cargoRouter;
