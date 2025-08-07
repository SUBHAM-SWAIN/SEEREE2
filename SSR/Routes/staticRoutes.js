const express = require("express");
const staticRouter = express.Router();
const User = require("../Models/UserModel.js");
const {
  isAuthenticatedUser,
  isAuthenticatedAdmin
} = require("../middlewares/isAuthenticated.js");

// Public Routes
staticRouter.get("/register", (req, res) => {
  return res.render("register");
});

staticRouter.get("/login", (req, res) => {
  return res.render("login");
});

// Protected Routes
staticRouter.get("/user/dashbord",isAuthenticatedUser, (req, res) => {
  return res.render("userDashbord");
});

staticRouter.get("/admin/dashbord", isAuthenticatedAdmin, async (req, res) => {
  try {
    const users = await User.find({ role: "student" });
    return res.render("adminDashbord", { users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = staticRouter;
