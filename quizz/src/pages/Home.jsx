import React, { useState, useEffect, useContext} from "react";
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
        <button onClick={handleGo}>Start the quizzz</button>
      </div>
    </div>
  );
};

export default Home;