const express = require ('express');
const router = express.Router();

const testsController = require("../controllers/testsController");

// Tests
router.get('/testRuns',testsController.getTestRuns );
router.get('/testRuns/:id', testsController.getTestRun );

module.exports = router;