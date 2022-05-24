const tipoUserController = require('../controllers/tipo_userController');

const router = require('express').Router();

router.get('/getTipoUser', tipoUserController.getALLTipoUser);

module.exports = router;
