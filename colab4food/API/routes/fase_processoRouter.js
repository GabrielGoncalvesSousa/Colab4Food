const fase_processoController = require('../controllers/fase_processoController');
const router = require('express').Router();

router.get('/getAllFasesProcesso', fase_processoController.getAllFasesProcesso);

module.exports = router;
