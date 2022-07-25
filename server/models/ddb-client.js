const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const fs = require('fs');
const { awsRegion: region } = JSON.parse(
  fs.readFileSync('../../conifer-config.json')
);

const ddbClient = new DynamoDBClient({ region });

module.exports = { ddbClient };
