const { QueryCommand } = require('@aws-sdk/client-dynamodb');
const { unmarshall } = require('@aws-sdk/util-dynamodb');
const { ddbDocClient } = require('../models/ddb-doc-client');
const fs = require('fs');

const {
  ConiferCdkStack: { tableName },
} = JSON.parse(fs.readFileSync('../../cdk_outputs.json'));

const getItemsByTestRunID = async (testRunID) => {
  try {
    const params = {
      TableName: tableName,
      IndexName: 'testRun',
      KeyConditionExpression: 'testRunID = :tri',
      ExpressionAttributeValues: {
        ':tri': { S: testRunID },
      },
    };

    const data = await ddbDocClient.send(new QueryCommand(params));

    const results = data.Items.map((item) => unmarshall(item));

    return results;
  } catch (err) {
    console.error('error in getItemsByTestRunID: ', err);
  }
};

module.exports = getItemsByTestRunID;
