const tipo_organizacaoController = require('../controllers/tipo_organizacaoController');
const router = require('express').Router();

router.get('/getAllTiposOrganizacao', tipo_organizacaoController.getAllTiposOrganizacao);

module.exports = router;
