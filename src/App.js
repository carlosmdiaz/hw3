import React from 'react';
import logo from './logo.svg';
import './App.css';
import Midboard from './components/MidBoard'
import DesignContainer from './components/DesignContainer'
//import {MidBoard} from './components/MidBoard.js (NOT WORKING)'

//import component js pages here

function App() {
  return (
    // <div className="container">
    // {/* <MidBoard/> */}
    // </div>

    <div className="App">
  
      <header className="App-header">
      <Midboard/>
      <DesignContainer/>
      </header>
    </div>
  );
}

export default App;
