import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import "../styles/home.css"
import {useSelector,useDispatch} from "react-redux";
import { incrementByAnswers } from "../dataSlice";
import mockData from "../fakeData/quizz_data";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';


const Quiz = ()=>{
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const score = useSelector((state) => state.scoreCount.value);
  const questions = mockData[0].questions;
  const currentQuestion = questions[questionIndex];
  console.log(mockData);

let dispatch = useDispatch(); 
const navigate = useNavigate();


const handleSubmit = () =>{
if
  (userAnswer === currentQuestion.answer){

    dispatch(incrementByAnswers(currentQuestion.points))
 
}
if (questionIndex < mockData[0].questions.length - 1) {
  setQuestionIndex(questionIndex + 1);
}else{

  setTimeout(() => {
    alert(`Quiz finished! Your total score is ${score + currentQuestion.points}`);
    navigate("/"); 
  }, 100); 
}
setUserAnswer("");
};

const handleChange = (e) =>{
setUserAnswer(e.target.value);
}

const isAnswerSelected = userAnswer !== "";


    return(
       <div>
          <Navbar/>
  
          <h1>{mockData[0].title}</h1>
      <p>Score: {score}</p>

      <div>
        <p>Q: {currentQuestion.question}</p>

        {currentQuestion.type === "multiple-choice" && (
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    onChange={handleChange}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        )}

        {currentQuestion.type === "input" && (
          <input
            type="text"
            value={userAnswer}
            onChange={handleChange}
            placeholder="Your answer"
          />
        )}

        <button onClick={handleSubmit} disabled={!isAnswerSelected}>Submit</button>
      </div>
    </div>
  );
};

export default Quiz;