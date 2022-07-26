const { createSession } = require('better-sse');

const createSseSession = async (req, res, next) => {
  const session = await createSession(req, res);
  res.sse = session;
  next();
};

const webhook = async (req, res) => {
  const data = req.body;
  try {
    res.sse.push(data);
    res.status(200).end();
  } catch (err) {
    console.log('SSE Error: ', err);
  }
};

exports.createSseSession = createSseSession;
exports.webhook = webhook;
