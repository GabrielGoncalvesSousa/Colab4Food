const userController = require('../controllers/userController');
const router = require('express').Router();

router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUserById:id_user', userController.getUserById);

module.exports = router;
