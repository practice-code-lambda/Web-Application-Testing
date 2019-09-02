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

  

  return (
    <div className="App">
      <Display/>
      <Dashboard/>
    </div>
  );
}

export default App;
