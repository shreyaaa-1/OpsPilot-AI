const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const authRoutes = require("./routes/authRoutes");



const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "OpsPilot AI API running" });
});

app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/auth", authRoutes);

app.use(errorHandler);

module.exports = app;


