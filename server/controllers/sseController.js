const { createSession } = require('better-sse');

let session;

const createSseSession = async (req, res) => {
  session = await createSession(req, res);
};

const webhook = async (req, res) => {
  const data = req.body;
  try {
    session.push(data);
    res.status(200).end();
  } catch (err) {
    console.log('SSE Error: ', err);
  }
};

exports.createSseSession = createSseSession;
exports.webhook = webhook;
