import React, { Component } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/work.css';
import { Spring } from 'react-spring/renderprops';
import portfolio from '../photos';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: portfolio
    }
  }

  render() {
    return (
      <AbsoluteWrapper>
        {this.state.photos.map( (photo, index ) => {
          return <a href={photo.src}><img src={photo.src} alt={photo.name} width="300px" /></a>
        })}
      </AbsoluteWrapper>
    );
  }
}

export default Work;
