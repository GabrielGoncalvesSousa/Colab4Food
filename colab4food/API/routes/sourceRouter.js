const sourceController = require('../controllers/sourceController');
const router = require('express').Router();

router.get('/getAllSources', sourceController.getAllSources);

module.exports = router;
