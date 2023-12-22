import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
import React from "react";
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import './App.css'

function App() {
  return (
    <Router>  
      <div className="App">  
        <Routes>  
          <Route exact path='/' element={< Home />}></Route>  
          <Route path='/about' element={< About />}></Route>  
          <Route path='/contact' element={< Contact />}></Route>  
        </Routes>  
      </div>
    </Router>
  )
}

export default App
