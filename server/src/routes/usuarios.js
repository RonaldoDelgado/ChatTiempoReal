import { Router } from "express";
import User from "../models/User.js";
import { signUp, signIn } from "../controllers/authController.js";
const router = Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

export default router;
