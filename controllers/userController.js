const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");
const bccrypt = require("bccrypt");

/**
 * Description Get all users
 * @route GET /users
 * @access Private
 */
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  if (!users) {
    return res.status(400).json({ message: "No users found" });
  }
  res.json(users);
});

/**
 * Description Create new user
 * @route POST /users
 * @access Private
 */
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;
  //confirm data
  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: "All fields are required" });
  }
  //Check for duplicate
  const duplicate = await User.findOne({ username }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Duplicate username" });
  }
});

/**
 * Description Update a user
 * @route PATCH /user
 * @access Private
 */
const updateUser = asyncHandler(async (req, res) => {});

/**
 * Description Delete a user
 * @route DELETE /user
 * @access Private
 */
const deleteUser = asyncHandler(async (req, res) => {});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
