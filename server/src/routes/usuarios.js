import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
const router = Router();

router.post("/signup", signUp);
router.post("/signIn", signIn);

export default router;
