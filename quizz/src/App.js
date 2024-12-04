
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/quiz' element={<Quiz/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
