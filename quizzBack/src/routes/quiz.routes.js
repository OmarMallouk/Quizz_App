import { Router } from "express";
import { getQuiz,createQuiz,updateQuiz,deleteQuiz } from "../controllers/quizController.js";
const router = new Router();


router.get("/:id?", getQuiz);
router.post("/create", createQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);


export default router;