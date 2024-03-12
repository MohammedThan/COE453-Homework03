const express = require("express");
const app = express();

app.use(express.json());

app.get("/add", (req, res) => {
  const { X, Y } = req.query;
  const result = Number(X) + Number(Y);
  res.json({ X, Y, Result: result });
});

app.get("/sub", (req, res) => {
  const { X, Y } = req.query;
  const result = Number(X) - Number(Y);
  res.json({ X, Y, Result: result });
});

app.get("/div", (req, res) => {
  const { X, Y } = req.query;
  const result = Number(X) / Number(Y);
  res.json({ X, Y, Result: result });
});

app.get("/mul", (req, res) => {
  const { X, Y } = req.query;
  const result = Number(X) * Number(Y);
  res.json({ X, Y, Result: result });
});

app.listen(3000, () => console.log("Server running on port 3000"));
