import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import "../styles/home.css"
import {useSelector,useDispatch} from "react-redux";
import { incrementByAnswers } from "../dataSlice";
import mockData from "../fakeData/quizz_data";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';


const Quiz = ()=>{


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