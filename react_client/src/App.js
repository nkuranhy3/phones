import React from 'react';
import './App.css';
import Main from './Component/Main';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'


const App = () => (
  <div>
    <Navbar />
    <div>
      <Main />
    </div>
    <Footer />
  </div>
  )
export default App;
