const tipoUserController = require('../controllers/tipo_userController');

const router = require('express').Router();

router.get('/getAllTiposUser', tipoUserController.getAllTiposUser);

router.get('/getTipoUserByUserId=:id_user', tipoUserController.getTipoUserByUserId);

module.exports = router;
