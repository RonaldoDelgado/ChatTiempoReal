import { Router } from "express";
import express from "express";
import userRout from "./usuarios.js";

const router = Router();
router.use(express.json());
router.use("/login", userRout);
export default router;
