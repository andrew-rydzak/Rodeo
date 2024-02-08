import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // TODO add additional checking here, e.g. user type ...
  let { firstName, lastName, email, password } = req.body;

  // convert info into how it's stored into the db
  email = email.toLowerCase().trim();
  lastName = lastName.trim();
  firstName = firstName.trim();

  // validate password
  const strong =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[^a-zA-Z]/.test(password) &&
    /[0-9]/.test(password);

  if (!strong) {
    res.status(400);
    throw new Error(
      `Password must contain at least one capital letter, 
      one special character, 
      one number,
      and be at least 8 characters long.`
    );
  }
  // validate first and last names
  const regName = /^[A-Za-z]+$/;

  let validFirstName = regName.test(firstName);
  let validLastName = regName.test(lastName);

  if (!validFirstName) {
    res.status(400);
    throw new Error("Not a valid first name.");
  }
  if (!validLastName) {
    res.status(400);
    throw new Error("Not a valid last name.");
  }
  // validate email
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let validEmail = regEmail.test(email);
  if (!validEmail) {
    res.status(400);
    throw new Error("Not a valid email.");
  }
  //validate user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // user info is valid, creat user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// // @desc    Update user profile
// // @route   PUT /api/users/profile
// // @access  Private
// const updateUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id)

//   if (user) {
//     user.name = req.body.name || user.name
//     user.email = req.body.email || user.email
//     if (req.body.password) {
//       user.password = req.body.password
//     }

//     const updatedUser = await user.save()

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//       token: generateToken(updatedUser._id),
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// // @desc    Delete user
// // @route   DELETE /api/users/:id
// // @access  Private/Admin
// const deleteUser = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id)

//   if (user) {
//     await user.remove()
//     res.json({ message: 'User removed' })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// // @desc    Update user
// // @route   PUT /api/users/:id
// // @access  Private/Admin
// const updateUser = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id)

//   if (user) {
//     user.name = req.body.name || user.name
//     user.email = req.body.email || user.email
//     user.isAdmin = req.body.isAdmin

//     const updatedUser = await user.save()

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

export {
  authUser,
  registerUser,
  getUserProfile,
  //   updateUserProfile,
  getUsers,
  //   deleteUser,
  getUserById,
  //   updateUser,
};
