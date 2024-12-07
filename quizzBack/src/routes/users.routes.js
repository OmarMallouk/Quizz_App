import { Router } from "express";
import { getUser,createUser,deleteUser } from "../controllers/usersController.js";
import { getQuiz,createQuiz,updateQuiz,deleteQuiz } from "../controllers/quizController.js";
const router = new Router();

router.get("/:id?", getUser);
router.post("/create", createUser);
router.delete("/:id", deleteUser);

router.get("/:id?", getQuiz);
router.post("/create", createQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);


export default router;