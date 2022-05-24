const prioridadeController = require('../controllers/prioridadeController');
const router = require('express').Router();

router.get('/getAllPrioridades', prioridadeController.getAllPrioridades);

module.exports = router;
