import React from 'react';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Capabilities from './views/Capabilities';
import Industries from './views/Industries';
import Contact from './views/Contact';
import logo from './img/mainlog.png';
import './css/home.css';
import { Spring } from 'react-spring/renderprops';

function App() {
  return (
    <div className="homeBlock">
      <div className="bannerBlock">
      <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay='600'>
            {props => <div style={props}>
            <div className="navbar">
          <img src={logo} alt="logo" />
          <ul className="nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#capabilities">Capabilities</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
            </div>}
        </Spring>
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay='1100'>
            {props => <div className="bannerText" style={props}>
              <h2>PRECISION<br/> SHEET METAL<br/> FABRICATION</h2>
              <button>MORE ABOUT US</button>
              <p>
                At McGarvin Engineering we are able to 
                produce short run as well as long 
                production jobs and satisfy all of our 
                customers needs with our large network 
                of subcontractors.
              </p>
            </div>}
        </Spring>
      </div>
        <Home />
        <About />
        <Capabilities />
        <Industries />
        <Contact />
    </div>
  );
}

export default App;
