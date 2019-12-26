import React, { useState } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/skills.css';
import { Spring } from 'react-spring/renderprops';

function Skills() {

  const [skill, setSkill] = useState('  ');

  const changeSkill = event => {
      event.preventDefault();

      let newSkill = event.target.name;

      setSkill(newSkill);
  }

  return (
    <AbsoluteWrapper>
        <div className="skillsPage">
            test
        </div>
    </AbsoluteWrapper>
  );
}

export default Skills;
