const Task = require("../models/Task");

const asyncHandler = require("../utils/asyncHandler");

// Create new task
exports.createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  // validation
  if (!title || title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = await Task.create({
    title: title.trim(),
    description,
  });

  res.status(201).json(task);
});


// Get all tasks with pagination + filtering + search
exports.getTasks = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const status = req.query.status;
  const search = req.query.search;

  const skip = (page - 1) * limit;

  const filter = {};

  if (status) {
    filter.status = status;
  }

  if (search) {
    filter.title = {
      $regex: search,
      $options: "i",
    };
  }

  const tasks = await Task.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Task.countDocuments(filter);

  res.json({
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
    data: tasks,
  });
});


// Update task
exports.updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByIdAndUpdate(
    id,
    req.body,
    {
      returnDocument: "after",
      runValidators: true,
    }
  );

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
