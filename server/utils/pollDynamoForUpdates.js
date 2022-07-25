const determineEntriesToUpdate = require('./determineEntriesToUpdate');
const { areTasksRunning: areTasksStopped } = require('./areTasksRunning');
const sendWebhooks = require('./webHook');

const POLLING_INTERVAL = 4000;
const EMPTY = 0;

const pollDynamoForNewData = (testRunID) => {
  //helper function for pollDynamoDb
  return setInterval(async () => {
    const newItems = await determineEntriesToUpdate(testRunID);
    console.log('newItems: ', newItems);
    if (newItems.length !== EMPTY) {
      sendWebhooks(newItems);
      console.log('Initiating updates of dynamo!');
    } else {
      console.log('no new items to update');
    }
  }, POLLING_INTERVAL);
};

function pollDynamoDb(testRunID, taskArns) {
  /* initiates polling test run data from dynamoDB for the dashboard for a given testRunID
  updates the dashboard with newly polled data
  ends polling when there are no more active tasks
  */
  const intervalClear = pollDynamoForNewData(testRunID);

  const tasksInactive = setInterval(async () => {
    const tasksStopped = await areTasksStopped(taskArns);
    if (tasksStopped) {
      console.log('we are clear');
      clearInterval(tasksInactive);
      clearInterval(intervalClear);
      // terminateDashboard();
    }
  }, POLLING_INTERVAL);
}

module.exports = pollDynamoDb;
