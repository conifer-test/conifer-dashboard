const express = require("express");
const routes = require("./routes/api");
const HttpError = require("./models/httpError");
require("dotenv").config();
const { areTasksRunning } = require('./utils/areTasksRunning');
const pollDynamoDb = require('./utils/pollDynamoForUpdates');
const fs = require('fs');


const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());

app.use("/api", routes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});
  
app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(err.code || 500);
  res.json({ error: err.message || "An unknown error occured" });
});
  
const port = process.env.PORT || 5001;

app.listen(port, async () => {
  const { testRunId } = JSON.parse(fs.readFileSync('../../conifer-config.json'));

  console.log(`Server running on port ${port}`);

  const taskArns = JSON.parse(process.env.TASK_ARNS);
  // console.log('taskArns: ', taskArns);

  let areTasksTest = await areTasksRunning(taskArns);
  console.log('areTasksTest: ', areTasksTest);
  
  // const res = await getItemsByTestRunID('c2a72ecf-ad30-44b0-a035-130e527b8457');
  // console.log(res);
  // pollDynamoDb('c2a72ecf-ad30-44b0-a035-130e527b8457', taskArns);
  pollDynamoDb(testRunId, taskArns);

});



