const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');

// Set the AWS Region.
const REGION = process.env.AWS_REGION;
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ region: REGION });

module.exports = { ddbClient };