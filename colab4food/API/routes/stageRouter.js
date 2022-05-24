const stageController = require('../controllers/stageController');
const router = require('express').Router();

router.get('/getAllStages', stageController.getAllStages);

module.exports = router;
