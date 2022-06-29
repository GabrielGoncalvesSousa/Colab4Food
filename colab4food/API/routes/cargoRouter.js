// const cargoController = require('../controllers/cargoController');
// const cargoController = require('../controllers/indexController').indexController(sequelize.models).cargoController;

// const sequelize = cargoController.sequelize;

// console.log(cargoControlle);
// let mainFunction = cargoController.mainFunction(sequelize.models);

const router = require('express').Router();

let cargoRouter = (cargoController) => {
  let getAllCargos = cargoController.getAllCargos;
  router.get('/getAllCargos', getAllCargos);

  let getCargoById = cargoController.getCargoById;
  router.get('/getCargoById/:id', getCargoById);
  return router;
};

module.exports = cargoRouter;
