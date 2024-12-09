import { Router } from "express";
import { getUser,createUser,deleteUser } from "../controllers/usersController.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = new Router();

router.get("/:id?",authMiddleware, getUser);
router.post("/create", createUser);
router.delete("/:id", deleteUser);


export default router;