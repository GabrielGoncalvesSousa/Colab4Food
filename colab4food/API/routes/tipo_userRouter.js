const tipoUserController = require('../controllers/tipo_userController');

const router = require('express').Router();

router.get('/getAllTiposUser', tipoUserController.getAllTiposUser);

module.exports = router;
