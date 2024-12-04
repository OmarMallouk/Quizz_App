import React, { useState, useEffect, useContext} from "react";
import axios from "axios";
import "../styles/home.css"
import {useDispatch} from "react-redux";
import { incrementByAnswers } from "../dataSlice";
import mockData from "../fakeData/quizz_data";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';


const Quiz = ()=>{
const navigate = useNavigate();



    return(
       <div>
          <Navbar/>
    helooo


    </div>
  );
};

export default Quiz;