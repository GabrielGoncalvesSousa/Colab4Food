const oportunidadeController = require('../controllers/oportunidadeController');
const router = require('express').Router();

router.get('/getAllOportunidades', oportunidadeController.getAllOportunidades);

module.exports = router;
