exports.add = (req, res) => {
  const { X, Y } = req.body;
  const result = Number(X) + Number(Y);
  res.status(200).json({ X, Y, Result: result });
};
