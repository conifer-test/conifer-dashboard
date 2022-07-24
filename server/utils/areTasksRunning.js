const fs = require('fs');
const CDK_OUTPUTS_PATH = '../../cdk_outputs.json';
const { ECSClient, DescribeTasksCommand } = require('@aws-sdk/client-ecs');

const { awsRegion: region } = JSON.parse(
  fs.readFileSync('../../conifer-config.json')
);

const areTasksRunning = async (taskArns) => {
  const cdkOutputs = JSON.parse(fs.readFileSync(CDK_OUTPUTS_PATH));
  const client = new ECSClient({ region });

  const cluster = cdkOutputs.ConiferCdkStack.clusterArn;

  const params = {
    cluster,
    tasks: taskArns,
  };

  const command = new DescribeTasksCommand(params);
  const response = await client.send(command);

  return response.tasks.every((task) => {
    return task.lastStatus === 'STOPPED';
  });
};

module.exports = { areTasksRunning };
