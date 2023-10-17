const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");
const bccrypt = require("bccrypt");

/**
 * Description Get all users
 * @route GET /users
 * @access Private
 */
const getAllUsers = asyncHandler(async (req, res) => {});

/**
 * Description Create new user
 * @route POST /users
 * @access Private
 */
const createNewUser = asyncHandler(async (req, res) => {});

/**
 * Description Update a user
 * @route PATCH /users
 * @access Private
 */
const updateUser = asyncHandler(async (req, res) => {});
