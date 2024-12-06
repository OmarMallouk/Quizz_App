import { Router } from "express";
import { getUser,createUser,deleteUser } from "../controllers/usersController";

const router = new Router();

router.get("/:id?", getUser);
router.post("/", createUser);
router.delet("/:id", deleteUser);


export default router;