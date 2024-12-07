import { Quiz } from "../models/quiz.model.js";
import { throwError, throwNotFound } from "../utils/errors.js";

export const createQuiz = async (req, res) => {
    const { title, questions } = req.body;
  
    try {
      if (!title || !questions || !Array.isArray(questions)) {
        return res.status(400).send({ message: "Title and questions are required" });
      }
  
      const quiz = new Quiz({
        title,
        questions,
      });
  
      await quiz.save();
      return res.status(201).json(quiz);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Something went wrong while creating the quiz" });
    }
  };