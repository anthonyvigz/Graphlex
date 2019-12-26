import React, { Component } from 'react';
import AbsoluteWrapper from './AbsoluteWrapper';
import '../css/work.css';
import { Spring } from 'react-spring/renderprops';
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
          {
            listOfImages.map(
                (image, index) =>    <img className="imgBlock" width="400px" key={index} src={image} alt="info"></img>
            )
            }
      </AbsoluteWrapper>
    );
  }
}

export default Work;
