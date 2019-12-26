import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Home from './views/Home';
import About from './views/About';
import Skills from './views/Skills';
import Work from './views/Work';
import Contact from './views/Contact';
import AbsoluteWrapper from './views/AbsoluteWrapper';
import NavBar from './views/NavBar';
import './App.css';
import './css/landingpage.css';

function App() {

  let location = useLocation();
  
  document.body.className = "mainbody";


  let transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <AbsoluteWrapper>
      <NavBar />
      <div className="App">
        <div>
          {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </animated.div>
          ))} 
      </div>
      </div>
    </AbsoluteWrapper>
  );
}

export default App;
