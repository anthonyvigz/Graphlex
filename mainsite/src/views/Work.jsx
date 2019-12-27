import React, { Component } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/work.css';
import { Spring } from 'react-spring/renderprops';
import Coverflow from 'react-coverflow';
var listOfImages = [];

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
          
      ]
    }
  }

  importAll(r) {
        return r.keys().map(r);
    }
    
  componentWillMount() {
      listOfImages = this.importAll(require.context('../img/Portfolio', false, /\.(png|jpe?g|svg)$/));
  }

  render() {
    return (
      <AbsoluteWrapper>
      </AbsoluteWrapper>
    );
  }
}

export default Work;
