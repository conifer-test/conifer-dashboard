const HttpError = require('../models/httpError');
const dynamo = require('../models/test');
const Test = require('../models/test.js')

const getTestRuns = async (req, res, next) => {
  const testRuns = await Test.getAll();
  return res.json(testRuns);
};

const getTestRun = async (req, res, next) => {
  try {
    // const testrunID = req.params.id;
    const testrunID = "8c13ed42-e336-41cc-8f93-977a19b0f1ef"
    const testRunData = await dynamo.getSingle(testrunID);
    res.json(testRunData);
  } catch (e) {
    return next(new HttpError("TestRunID is missing or invalid", 404));
  }
}

exports.getTestRuns = getTestRuns;
exports.getTestRun = getTestRun; 