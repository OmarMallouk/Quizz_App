import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementByAnswers, resetScore } from "../dataSlice";

const useQuestions = (mockData) =>{
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const score = useSelector((state) => state.scoreCount.value);
    const questions = mockData[0].questions;
    const currentQuestion = questions[questionIndex];
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = () => {
        if (userAnswer === currentQuestion.answer) {
          dispatch(incrementByAnswers(currentQuestion.points));
        }
        if (questionIndex < questions.length - 1) {
          setQuestionIndex(questionIndex + 1);
        } else {
          setTimeout(() => {
            alert(`Quiz finished! Your total score is ${score + currentQuestion.points}`);
          }, 100);
        }
        setUserAnswer("");
      };
    
      const handleChange = (e) => {
        setUserAnswer(e.target.value);
      };

      const handleDelete = () =>{
        setQuestionIndex(0);
        setUserAnswer(""); 
        dispatch(resetScore());
      }
   
return {
    questionIndex,
    userAnswer,
    currentQuestion,
    handleSubmit,
    handleChange,
    handleDelete,
    score
  };
};

export default useQuestions;