exports.sub = (req, res) => {
  const { X, Y } = req.query;
  const result = Number(X) - Number(Y);
  res.status(200).json({ X, Y, Result: result });
};
