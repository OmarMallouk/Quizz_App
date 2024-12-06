import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
// import "../styles/home.css"
import "../styles/quiz.css"
import {useSelector,useDispatch} from "react-redux";
import { incrementByAnswers } from "../dataSlice";
import mockData from "../fakeData/quizz_data";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';
import useQuestions from "../hooks/useQuestions";


const Quiz = ()=>{
  const { questionIndex,
    userAnswer,
    currentQuestion,
    handleSubmit,
    handleChange,handleDelete,score} = useQuestions(mockData);


    useEffect(()=>{
      
            },[handleDelete]);


const isAnswerSelected = userAnswer !== "";


    return(
       <div className="container">
          <Navbar/>
  
          <h1>{mockData[0].title}</h1>
     

      <div className="questions">
        <p className="question">Q: {currentQuestion.question}</p>

        {currentQuestion.type === "multiple-choice" && (
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <label>
                <Radio  name="answer"
                    value={option}
                    onChange={handleChange}>
                    
                   
                    </Radio>
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
        <button onClick={handleDelete} >Restart</button>
      </div>
    </div>
  );
};

export default Quiz;