import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path='/' element={<Home/>} />
          <Route path='/quiz' element={<Quiz/>} />
 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
