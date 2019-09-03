import React, { useState } from 'react';
import './App.css';

import Display from './components/Display'
import Dashboard from './components/Dashboard'

function App() {

  const [state, setState] = useState({
    balls: 0,
    strikes: 0,
    hits: 0
  })

  function addStrike() {
  
    (state.strikes === 3) ? 
    setState({...state, strikes: 0, balls: 0}) :
    setState({...state, strikes: state.strikes + 1})
  }
  function addBalls() {
  
    (state.balls === 4) ? 
    setState({...state, strikes: 0, balls: 0}) :
    setState({...state, balls: state.balls + 1})
  }



  return (
    <div className="App">
      <h1>Stat tracker</h1>
      <Display state = {state}/>
      <Dashboard addStrike = {addStrike} addBalls = {addBalls}/>
    </div>
  );
}

export default App;
