const organizacaoController = require('../controllers/organizacaoController');
const router = require('express').Router();

router.get('/getAllOrganizacoes', organizacaoController.getAllOrganizacoes);

module.exports = router;
