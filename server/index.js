const express = require('express');
const { createSession } = require('better-sse');
const fs = require('fs');
const routes = require('./routes/api');
const HttpError = require('./models/httpError');
const pollDynamoDb = require('./utils/pollDynamoForUpdates');
require('dotenv').config();

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

app.listen(port, async () => {
  // const { testRunId, taskRunARNs } = JSON.parse(
  //   fs.readFileSync('../../conifer-config.json')
  // );
  console.log(`Server running on port ${port}`);
  // pollDynamoDb(testRunId, taskRunARNs);
});
