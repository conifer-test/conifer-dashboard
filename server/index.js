const express = require('express');
// const fs = require('fs');
const routes = require('./routes/api');
const HttpError = require('./models/httpError');
// const pollDynamoDb = require('./utils/pollDynamoForUpdates');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.json());

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

const PORT = process.env.PORT || 5001;

app.listen(PORT, async () => {
  // const { testRunId, taskRunARNs } = JSON.parse(
  //   fs.readFileSync('../../conifer-config.json')
  // );
  console.log(`Server running on port ${PORT}`);
  // pollDynamoDb(testRunId, taskRunARNs);
});
