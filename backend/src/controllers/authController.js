const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

/* ================= REGISTER ================= */

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ✅ validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // ✅ check existing user
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // ✅ hash password
    const hashed = await bcrypt.hash(password, 10);

    /* 🔥 AUTO ADMIN LOGIC */
    const userCount = await User.countDocuments();
    const role = userCount === 0 ? "admin" : "user";

    // ✅ create user
    await User.create({
      name,
      email,
      password: hashed,
      role,
    });

    res.status(201).json({
      message: "User registered successfully",
      roleAssigned: role,
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: err.message });
  }
};

/* ================= LOGIN ================= */

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ create JWT
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: err.message });
  }
};