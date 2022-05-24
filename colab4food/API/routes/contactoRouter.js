const contactoController = require('../controllers/contactoController');
const router = require('express').Router();

router.get('/getAllContactos', contactoController.getAllContactos);

module.exports = router;
