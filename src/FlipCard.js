import React, { Component } from 'react';
import './FlipCard.css';

class FlipCard extends Component {

  constructor() {
    super();
    this.state = {side: 1};

    this.flip = this.flip.bind(this);
  }

  render() {
    return (
      <div className="FlipCard">
        <div className="FlipCard-umbra" style={this.umbraAnimation}></div>
        <div className="FlipCard-penumbra" style={this.penumbraAnimation}></div>

        <div className="FlipCard-front" style={this.frontAnimation}>
          <h1>Front</h1>
          <button
            onClick={this.flip}
            tabIndex={this.state.side === 1 ? 0 : -1}
            ref={(btn) => this.frontBtn = btn}>Flip Card</button>
        </div>

        <div className="FlipCard-back" style={this.backAnimation} ref={(back) => this.back = back}>
          <h1>Back</h1>
          <button
            onClick={this.flip}
            tabIndex={this.state.side === 2 ? 0 : -1}
            ref={(btn) => this.backBtn = btn}>Flip Card</button>
        </div>
      </div>
    );
  }

  flip() {
    const sideOne = {animation: 'FlipCard-front 800ms ease-in-out forwards'};
    const sideTwo = {animation: 'FlipCard-back 800ms ease-in-out forwards'};
    const umbra1 = {animation: 'FlipCard-umbra1 800ms ease-in-out forwards'};
    const umbra2 = {animation: 'FlipCard-umbra2 800ms ease-in-out forwards'};
    const penumbra1 = {animation: 'FlipCard-penumbra1 800ms ease-in-out forwards'};
    const penumbra2 = {animation: 'FlipCard-penumbra2 800ms ease-in-out forwards'};

    switch (this.state.side) {
      case 1:
        this.frontAnimation = sideOne;
        this.backAnimation = sideTwo;
        this.umbraAnimation = umbra1;
        this.penumbraAnimation = penumbra1;
        this.backBtn.focus();
        this.setState({side: 2});
        break;
      case 2:
        this.frontAnimation = sideTwo;
        this.backAnimation = sideOne;
        this.umbraAnimation = umbra2;
        this.penumbraAnimation = penumbra2;
        this.frontBtn.focus();
        this.setState({side: 1});
        break;
      default:
        throw new Error('Unknown side');
    }
  }

}

export default FlipCard;
