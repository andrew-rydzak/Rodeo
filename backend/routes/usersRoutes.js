import {
  authUser,
  getUserProfile,
  registerUser,
  getUsers,
  getUserById,
} from "../controllers/userController.js";

import User from "../models/userModel.js";
import express from "express";
import asyncHandler from "express-async-handler";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, getUsers);

router.post("/login", authUser);

router.route("/profile").get(protect, getUserProfile);

router.route("/:id").get(protect, getUserById);
export default router;
