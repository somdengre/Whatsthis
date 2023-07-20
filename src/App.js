import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Edision from './houses/edision';
import Elephent from './houses/elephant';

function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Home/>} />
        <Route path="/edision" element={<Edision/>}/>
        <Route path="/elephant" element={<Elephent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
