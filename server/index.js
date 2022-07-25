const express = require('express');
const routes = require('./routes/api');
const HttpError = require('./models/httpError');
require('dotenv').config();
const { areTasksRunning } = require('./utils/areTasksRunning');
const pollDynamoDb = require('./utils/pollDynamoForUpdates');
const fs = require('fs');
const { createSession } = require('better-sse');

const app = express();
let sseSession;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());

// Create a sse server for listening to webhooks
app.get('/sse', async (req, res) => {
  sseSession = await createSession(req, res);
});

// Receiving the webhook for testFile updated
app.post('/testFileUpdated', (req, res) => {
  const data = req.body;
  try {
    sseSession.push(data);
    res.status(200).end();
  } catch (err) {
    console.log('SSE Error: ', err);
  }
});

app.use('/api', routes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 500);
  res.json({ error: err.message || 'An unknown error occured' });
});

const port = process.env.PORT || 5001;

// For testing purposes
app.listen(port, async () => {
  const { testRunId, taskRunARNs } = JSON.parse(
    fs.readFileSync('../../conifer-config.json')
  );

  console.log(`Server running on port ${port}`); //ORIGINAL
  // console.log('taskArns: ', taskArns);

  const areTasksTest = await areTasksRunning(taskRunARNs);
  console.log('areTasksTest: ', areTasksTest);

  // const res = await getItemsByTestRunID('c2a72ecf-ad30-44b0-a035-130e527b8457');
  // console.log(res);
  // pollDynamoDb('c2a72ecf-ad30-44b0-a035-130e527b8457', taskArns);
  pollDynamoDb(testRunId, taskRunARNs);
});
