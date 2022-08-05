const HttpError = require('../models/httpError');
const dynamo = require('../models/test');
const Test = require('../models/test.js');
// const { areTasksRunning } = require('../utils/areTasksRunning');
// require('dotenv').config();

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
// ...

const getTestRuns = async (req, res, next) => {
  const testRuns = await Test.getAll();
  return res.json(testRuns);
};

const mapToSignedUrl = async (singleTestRunData) => {
  const client = new S3Client({ region: 'us-west-1' });
  const getObjectParams = {
    Bucket: 'conifer-test-bucket-b586993c-2641-45fc-a6d0-1edf75b711ca',
    Key: singleTestRunData.videoUrl
  }

  const command = new GetObjectCommand(getObjectParams);
  const signedUrl = await getSignedUrl(client, command, { expiresIn: 3600 });
  singleTestRunData.signedUrl = signedUrl
  return singleTestRunData;
}

const getTestRun = async (req, res, next) => {
  try {
    const testrunID = req.params.id;
    const testRunData = await dynamo.getSingle(testrunID);
    await Promise.all(testRunData.map(mapToSignedUrl));

    res.json(testRunData);
  } catch (e) {
    console.log(e)
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
