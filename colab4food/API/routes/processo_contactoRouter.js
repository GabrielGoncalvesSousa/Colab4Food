const processo_contactoController = require('../controllers/processo_contactoController');
const router = require('express').Router();

router.get('/getAllProcessosContacto', processo_contactoController.getAllProcessosContacto);

module.exports = router;
