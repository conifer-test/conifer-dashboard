const HttpError = require('../models/httpError');
const dynamo = require('../models/test');
const Test = require('../models/test.js');
// const { areTasksRunning } = require('../utils/areTasksRunning');
// require('dotenv').config();

const getTestRuns = async (req, res, next) => {
  const testRuns = await Test.getAll();
  return res.json(testRuns);
};

const getTestRun = async (req, res, next) => {
  try {
    const testrunID = req.params.id;
    const testRunData = await dynamo.getSingle(testrunID);
    res.json(testRunData);
  } catch (e) {
    return next(new HttpError('TestRunID is missing or invalid', 404));
  }
};

// Import the Arns of the initiated tasks
// const taskArns = process.env.TASK_ARNS;
// console.log('taskArns: ', taskArns);

// INSERT RETRIEVE TEST RUN ID
// INSERT CALL TO POLL DYNODB, USE

exports.getTestRuns = getTestRuns;
exports.getTestRun = getTestRun;
