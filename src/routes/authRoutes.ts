import express from "express";
import { loginUser, registerUser } from "../controllers/authController";
import { authMiddleware } from "../middleware/auth";

const router = express.Router();

router.post("/register", authMiddleware, registerUser);
router.post("/login", loginUser);

export default router;
