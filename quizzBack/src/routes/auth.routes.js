import { Router } from "express";
import { login,register } from "../controllers/AuthController.js";

const router = new Router();

router.post("/login", login);
router.post("/register", register);

export default router;
