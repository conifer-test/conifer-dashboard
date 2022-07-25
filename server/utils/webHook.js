const axios = require('axios');

async function sendWebhooks(data) {
  const webhookURL = 'http://localhost:5001/testFileUpdated';
  try {
    const response = await axios.post(webhookURL, data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = sendWebhooks;
