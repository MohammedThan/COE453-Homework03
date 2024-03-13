const functions = require("@google-cloud/functions-framework");

functions.http("div", (req, res) => {
  const { X, Y } = req.body;
  const result = Number(X) / Number(Y);
  res.send({ X, Y, Result: result });
});
