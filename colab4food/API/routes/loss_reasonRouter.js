const loss_reasonController = require('../controllers/loss_reasonController');
const router = require('express').Router();

router.get('/getAllLossReasons', loss_reasonController.getAllLossReasons);

module.exports = router;
