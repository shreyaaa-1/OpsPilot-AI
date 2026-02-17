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

app.use("/api/tasks", taskRoutes);

module.exports = app;
app.use(errorHandler);
app.use("/api/auth", authRoutes);


