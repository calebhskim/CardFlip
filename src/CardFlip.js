import React, { Component } from 'react';

import './CardFlip.css';

class CardFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  render() {
    const { clicked } = this.state;
    return (
      <div className='scene' onClick={() => this.setState({ clicked: !clicked})}>
        <div className={`card ${clicked ? 'flip' : ''}`}>
          <div className='card-face card-face-front'>
            <div className='circle circle-front' />
          </div>
          <div className='card-face card-face-back'>
            <div className='circle circle-back' />
          </div>
        </div>
      </div>
    );
  }
}

CardFlip.defaultProps = {};

export default CardFlip;
