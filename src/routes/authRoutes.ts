import express from "express";
import {
  loginUser,
  registerUser,
  requestPasswordReset,
  resetPassword,
} from "../controllers/authController";
import { authMiddleware } from "../middleware/auth";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/request-reset-password", requestPasswordReset);
router.post("/reset-password", resetPassword);

export default router;
