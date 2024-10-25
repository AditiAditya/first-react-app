// import logo from './logo.svg';
// import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import React , { useState } from 'react';
import About from './components/About';

function App() {

  return (
    <>
      <Navbar title="Textutils" />
      <Alert alert={alert} />
        <div className='conatiner my - 3 ' >
          <About />
        </div>
    </>
  )
}
export default App;
