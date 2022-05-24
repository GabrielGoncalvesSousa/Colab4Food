const interacaoController = require('../controllers/interacaoController');
const router = require('express').Router();

router.get('/getAllInteracoes', interacaoController.getAllInteracoes);

module.exports = router;
