import React from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/resume.css';
import mainLogo from '../img/GXLogoTrans1.png';

function Home() {

    document.body.classList.remove("newpage");

  return (
    <AbsoluteWrapper>
          <h1 className="logoTitle">GRAPHLEX<span>VISUAL</span>COMMUNICATIONS</h1>
    </AbsoluteWrapper>
  );
}


export default Home;
