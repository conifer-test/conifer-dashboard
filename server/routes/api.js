const express = require('express');
const router = express.Router();

const testsController = require('../controllers/testsController');
const sseController = require('../controllers/sseController');

// Tests
router.get('/testRuns', testsController.getTestRuns);
router.get('/testRuns/:id', testsController.getTestRun);

// SSE
router.get('/sse', sseController.createSseSession);
router.post('/testFileUpdated', sseController.webhook);

module.exports = router;
