const getItemsByTestRunID = require('./getItemsByTestRunID');

const sec = 1000;
const empty = 0;
const increment = 1;
const zero = 0;

let currLatestTimeStamp = new Date('2010-07-20T03:43:35.505Z'); //arbitrarily old date
let prevLatestTimeStamp = currLatestTimeStamp;
let x = 7;


async function itemsToUpdate (testRunID) {
  /*
  input is testRunID, queries dynamoDB and returns array of test run objects
  that have not been updated on the dashboard
  */
  const items = await getItemsByTestRunID(testRunID);
  const newItems = [];
  items.forEach(item => {
    const itemDate = new Date(item.stats.end);
    if (prevLatestTimeStamp < itemDate) {
      newItems.push(item);
      if (currLatestTimeStamp < itemDate) {
        currLatestTimeStamp = itemDate;
      }
    }
  });
  prevLatestTimeStamp = currLatestTimeStamp;
  return newItems;
}

async function updateDashboard(newItems) {
  console.log('new items are: ', newItems);
  console.log('dashboard updated!');
}


function areTasksActive() {
  // filler function, replace with actual areTasksActive
  x -= increment;
  console.log('x is: ', x);
  return x > zero;
}

function terminateDashboard() {
  // filler function to stop polling the dashboard
  console.log('dashbaord terminated');
}



const pollData = (testRunID) => {
  //helper function for pollDynamoDb
  return setInterval(async () => {
    const newItems = await itemsToUpdate(testRunID);
    if (newItems.length !== empty) {
      updateDashboard(newItems);
    } else {
      console.log('no new items to update');
    }
  }, sec);
};

function pollDynamoDb(testRunID) {
    /* initiates polling test run data from dynamoDB for the dashboard for a given testRunID
  updates the dashboard with newly polled data
  ends polling when there are no more active tasks
  */ 
  const intervalClear = pollData(testRunID);

  const tasksActive = setInterval(() => {
    if (!areTasksActive()) {
      console.log('we are clear');
      clearInterval(tasksActive);
      clearInterval(intervalClear);
      terminateDashboard();
    }
  }, sec);
}

// pollDynamoDb('A');

module.exports = pollDynamoDb;