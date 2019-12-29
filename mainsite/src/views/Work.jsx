import React, { Component } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/work.css';
import { Spring } from 'react-spring/renderprops';
import portfolio from '../photos';
import PhotoCard from './PhotoCard';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: portfolio,
      photo: portfolio[0]
    }
  }

  nextPhoto = () => {
    const newIndex = this.state.photo.index+1;
    this.setState({ 
      photo: portfolio[newIndex] 
    })
    console.log(this.state.photo)
  }

  prevPhoto = () => {
    const newIndex = this.state.photo.index-1;
    this.setState({ 
      photo: portfolio[newIndex] 
    })
    console.log(this.state.photo)
  }

  render() {
    return (
      <AbsoluteWrapper>
        <button onClick={() => this.nextPhoto()}>Next</button>
        <button onClick={() => this.prevPhoto()}>Prev</button>
        <PhotoCard photo={this.state.photo} />
      </AbsoluteWrapper>
    );
  }
}

export default Work;
