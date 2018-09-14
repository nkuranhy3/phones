import React from 'react';
import './App.css';
import Main from './Component/Main';
import Navbar from './Component/Navbar';
const App = () => (
  <div>
    <Navbar />
    <div className = 'container'>
      <Main />
    </div>
  </div>
  )
export default App;
