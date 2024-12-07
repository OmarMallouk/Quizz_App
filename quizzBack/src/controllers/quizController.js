import { Quiz } from "../models/quiz.model.js";
import { throwError, throwNotFound } from "../utils/errors.js";

export const getQuiz = async (req,res) => {
    const id = req.params.id;


    try{
        if (id){
            const quiz = await Quiz.findById(id);

            if(!id){
                res.status(404).send({
                    message: "Quiz not found :("
                })
            }
            return res.json(quiz);
        }
        const quizz = await Quiz.find()

        return res.json(quizz);

    }catch (error){
        console.log(error.message);

        return res.status(500).send({
            message: "Error fetching quiz :("
        });
    }
};

export const createQuiz = async (req, res) => {
    const { title, questions } = req.body;
  
    try {
      if (!title || !questions || !Array.isArray(questions)) {
        return res.status(400).send({ message: "Title and questions are required" });
      }
  
      const quiz = await Quiz.create({
        title,
        questions
      });
  
      return res.json(quiz);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Something went wrong while creating the quiz" });
    }
  };


  export const updateQuiz = async (req, res) => {
    const { id } = req.params;
    const { title, questions } = req.body;
  
    try {
      const updatedQuiz = await Quiz.findByIdAndUpdate(
        id,
        { title, questions },
        { new: true }
      );
      if (!updatedQuiz) {
        return res.status(404).send({ message: "Quiz not found" });
      }
      return res.json(updatedQuiz);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Error updating quiz" });
    }
  };


  export const deleteQuiz = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedQuiz = await Quiz.findByIdAndDelete(id);
      if (!deletedQuiz) {
        return res.status(404).send({ message: "Quiz not found" });
      }
      return res.json(deletedQuiz);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Error deleting quiz" });
    }
  };