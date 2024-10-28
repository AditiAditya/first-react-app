// import logo from './logo.svg';
// import React, { useState } from 'react';
import './App.css';
import TextForm from './components/Textform';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import About from './components/About';
// import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import TextForm from './components/Textform';
// import { Router } from 'react-router-dom/cjs/react-router-dom.min';



function App() {


  return (


    <>
      <Router>
        <Navbar title="Textutils" />
        <Alert alert={alert} />
        <div className='conatiner my - 3 ' >

          <Switch>
            <Route path="/about" >
              <About />
            </Route>
            <Route path="/">
              <TextForm heading="enter code here " />
            </Route>
          </Switch>


        </div>
      </Router>
    </>


  )

}
export default App;
