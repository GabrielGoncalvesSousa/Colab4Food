const cargoController = require('../controllers/cargoController');
const router = require('express').Router();

router.get('/getAllCargos', cargoController.getAllCargos);

module.exports = router;
