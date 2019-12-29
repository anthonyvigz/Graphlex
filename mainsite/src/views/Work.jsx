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


  // issue where index is adding here.

  nextPhoto = (event) => {
    event.preventDefault();
    this.setState({ 
      photo: portfolio[this.state.photo.index] 
    })
    console.log(this.state.photo.index);
  }

  prevPhoto = (event) => {
    event.preventDefault();
    this.setState({ 
      photo: portfolio[this.state.photo.index-2] 
    })
    console.log(this.state.photo.index);
  }

  render() {
    return (
      <AbsoluteWrapper>
        <button 
          onClick={this.nextPhoto} 
          disabled={this.state.photo.index === this.state.photos.length-1}>
            Next
        </button>
        <button 
          onClick={this.prevPhoto} 
          disabled={this.state.photo.index === 1}>
            Prev
        </button>
        <PhotoCard photo={this.state.photo} />
      </AbsoluteWrapper>
    );
  }
}

export default Work;
