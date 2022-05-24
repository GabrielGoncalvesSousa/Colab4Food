const distritoController = require('../controllers/distritoController');
const router = require('express').Router();

router.get('/getAllDistritos', distritoController.getAllDistritos);

module.exports = router;
