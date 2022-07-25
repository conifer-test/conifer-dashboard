const express = require('express');
const router = express.Router();

const testsController = require('../controllers/testsController');
// const webHookController = require('../controllers/webHookController');

// Tests
router.get('/testRuns', testsController.getTestRuns);
router.get('/testRuns/:id', testsController.getTestRun);

// Receive webhooks
// router.post('/testFileUpdated', webHookController.updateTestFile);

module.exports = router;
