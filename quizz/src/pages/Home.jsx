import React, { useState, useEffect, useContext} from "react";
import '@fontsource/roboto/300.css';
import Button from '@mui/material/Button';
import axios from "axios";
import "../styles/home.css"
import { useNavigate } from 'react-router-dom';


const Home = ()=>{
  const navigate = useNavigate();

  const handleGo = () =>{
    navigate('/quiz')
}

    return(
        

    <div>
      <h1 className="intro">Ready to test your skills ?</h1>

      <div className="quiz1">
        <Button  variant="contained"  onClick={handleGo}>Start the quizzz</Button>
      </div>
    </div>
  );
};

export default Home;