import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/services.css';
import { Spring } from 'react-spring/renderprops';

function Skills() {

  return (
    <AbsoluteWrapper>
        <div className="services">
            <div className="serviceBlock">
              <i className=" fa fa-star-o"></i>
              <h3>BRANDING</h3>
              <h4>Image is Everything</h4>
              <div className="divider" />
              <h5>From logo to billboard<br/>
                  Custom font included</h5>
            </div>
            <div className="serviceBlock">
              <i className=" fa fa-cubes"></i>
              <h3>DESIGN</h3>
              <h4>Creative & Handcrafted</h4>
              <div className="divider" />
              <h5>From flyer to website<br/>
                  Always a unique concept</h5>
            </div>
            <div className="serviceBlock">
              <i className=" fa fa-keyboard-o"></i>
              <h3>DEVELOPMENT</h3>
              <h4>Agile & Powerful </h4>
              <div className="divider" />
              <h5>From WordPress to Magento<br/>
                  Zero bloat code guaranteed</h5>
            </div>
        </div>
    </AbsoluteWrapper>
  );
}

export default Skills;
