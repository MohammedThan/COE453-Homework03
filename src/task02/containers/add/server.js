const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const { X, Y } = req.body;
  const result = Number(X) + Number(Y);
  res.send({ X, Y, Result: result });
});

app.get("/", (req, res) => {
  const { X, Y } = req.body;
  const result = Number(X) + Number(Y);
  res.send({ X, Y, Result: result });
});

app.listen(8080, () => {
  console.log("Server is up on 8080");
});
