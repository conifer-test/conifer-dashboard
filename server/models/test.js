const { ScanCommand, QueryCommand } = require('@aws-sdk/client-dynamodb');
const { unmarshall } = require('@aws-sdk/util-dynamodb');
const { ddbDocClient } = require('./ddb-doc-client.js');

const fs = require('fs');
const {
  ConiferCdkStack: { tableName },
} = JSON.parse(fs.readFileSync('../../cdk_outputs.json'));

const getAll = async () => {
  try {
    const params = {
      TableName: tableName,
    };

    const data = await ddbDocClient.send(new ScanCommand(params));

    // Map to get testRunIDs only
    const testRunIDs = data.Items.map((item) => unmarshall(item).testRunID);
    const uniqueTestRuns = [...new Set(testRunIDs)];
    return uniqueTestRuns;
  } catch (err) {
    console.error(err);
  }
};

const getSingle = async (testRunID) => {
  try {
    const params = {
      TableName: tableName,
      FilterExpression: 'testRunID = :tr',
      ExpressionAttributeValues: {
        ':tr': { S: testRunID },
      },
    };

    const data = await ddbDocClient.send(new ScanCommand(params));
    const results = data.Items.map((item) => unmarshall(item));
    return results;
  } catch (err) {
    console.error(err);
  }
};

// Returns an array of JSON data for a test file passed in as argument
const getItemsByFileName = async (testFileName) => {
  try {
    // Set the query parameters
    const params = {
      KeyConditionExpression: 'testFileName = :tfn',
      ExpressionAttributeValues: {
        ':tfn': { S: testFileName }, // './cypress/e2e/first-test.cy.js'
      },
      TableName: 'Conifer_Test_Runs',
    };

    const data = await ddbDocClient.send(new QueryCommand(params));

    const results = data.Items.map((item) => unmarshall(item));

    return results;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getSingle, getAll };
