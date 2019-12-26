import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/about.css';
import { Spring } from 'react-spring/renderprops';

function About() {

  return (
    <AbsoluteWrapper>
        <div className="aboutBlock">
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        delay='500'>
                        {props => <div className="aboutTitle" style={props}>
                            <h5>WE'RE JUST LIKE THE REST, <span>ONLY DIFFERENT</span></h5>
                        </div>}
                    </Spring>
                    <Spring
                        from={{ opacity: 0 }}
                        to={{ opacity: 1 }}
                        delay='700'>
                        {props => <div className="aboutTitle" style={props}>
                            <p>
                            In fact we’re just a bunch of 
                            friendly, hardworking people who 
                            love creating nice stuff for our 
                            awesome clients. Don’t hesitate to 
                            connect with us if you think we 
                            should help you out with your new 
                            project.
                            </p>
                        </div>}
                    </Spring>
        </div>
    </AbsoluteWrapper>
  );
}

export default About;
