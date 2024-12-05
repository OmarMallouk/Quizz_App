import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementByAnswers } from "../dataSlice";

const useQuestions = (mockData) =>{
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const score = useSelector((state) => state.scoreCount.value);
    const questions = mockData[0].questions;
    const currentQuestion = questions[questionIndex];
    const dispatch = useDispatch();
    const navigate = useNavigate();

}