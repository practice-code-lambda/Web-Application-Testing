import React, { useState } from 'react';
import './App.css';

import Display from './components/Display'
import Dashboard from './components/Dashboard'

//function is exported outside of App and then used in app to export to tests
export const addStrike = strikes => {
  return strikes < 2 ? ++strikes : 0;
};


function App() {

  const [state, setState] = useState({
    balls: 0,
    strikes: 0,
    hits: 0
  })
  
  function addStrikes(){
 
    const strikes = addStrike(state.strikes);
    setState({...state, strikes:strikes})
  };

  function addBalls() {
  
    (state.balls === 3) ? 
    setState({...state, strikes: 0, balls: 0}) :
    setState({...state, balls: state.balls + 1})
  }

  function addHit() {
    setState({...state, strikes: 0, balls: 0})
  }



  return (
    <div className="App">
      <h1>Stat tracker</h1>
      <Display state = {state}/>
      <Dashboard 
      addStrike = {addStrikes}
      addBalls = {addBalls}
      addHit = {addHit}
      />
    </div>
  );
}

export default App;
