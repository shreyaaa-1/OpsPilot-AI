const errorHandler = (err, req, res, next) => {
  console.error("Global error:", err);

  // mongoose validation
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: err.message,
    });
  }

  // mongoose cast error (bad ObjectId)
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }

  res.status(500).json({
    message: err.message || "Server Error",
  });
};

module.exports = errorHandler;
