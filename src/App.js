import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Edision from './houses/edision';
import Elephent from './houses/elephant';

import What from './pages/what';
import Who from './pages/who';
import Why from './pages/why';
import Main from './pages/main';
import Where from './pages/where';
import Menu from './pages/menu';
import Aerospace from './houses/aerospace';
import Kolte from './houses/kolte';
import Jammu from './houses/jammu';
import Lily from './houses/lily';
import Whyspend from './why/Spend/whySpend';
import Whychoose from './why/whyChoose/whyChoose';
import Whylightning from './why/whyLightning/whyLightning';

function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Main/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/what" element={<What/>} />
        <Route path="/where" element={<Where/>} />
        <Route path="/edision" element={<Edision/>}/>
        <Route path="/elephant" element={<Elephent/>}/>
        <Route path="/aerospace" element={<Aerospace/>}/>
        <Route path="/kolte" element={<Kolte/>}/>
        <Route path="/who" element={<Who/>}/>
        <Route path="/why" element={<Why/>}/>
        <Route path="/jammu" element={<Jammu/>}/>
        <Route path="/lily" element={<Lily/>}/>
        <Route path="/why_spend" element={<Whyspend/>}/>
        <Route path="/why_choose" element={<Whychoose/>}/>
        <Route path="/why_lightning" element={<Whylightning/>}/>
        <Route path="/why_about" element={<Whyspend/>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
