import React from 'react';
import _ from 'underscore';
import './FlipCard.css';

const SIDES = {
    FRONT: 1,
    BACK: 2
}

class FlipCard extends React.Component {

  constructor() {
    super();
    this.flip = this.flip.bind(this);

    this.state = {side: 1};
  }

  render() {
      console.log(this.props.width);
    const cardSize = _.extend({width: '270px', height: '380px'}, this.props.size);
    const umbraStyles = _.extend({}, cardSize, this.umbraAnimation);
    const penumbraStyles = _.extend({width: `${parseInt(cardSize.width, 10) + 60}px`, height: `${parseInt(cardSize.height, 10) + 70}px`}, this.penumbraAnimation);
    console.log(penumbraStyles);
    return (
      <div className="FlipCard" style={cardSize}>
        <div className="FlipCard-umbra" style={umbraStyles}></div>
        <div className="FlipCard-penumbra" style={penumbraStyles}></div>

        {React.Children.map(this.props.children, (child, i) => {
            // build props obj
            const side = i + 1;
            const cardFaceProps = {
                flip: this.flip,
                side: side === SIDES.FRONT ? 'front' : 'back',
                animation: side === SIDES.FRONT ? this.frontAnimation : this.backAnimation,
                active: side === this.state.side,
                ref: side === SIDES.FRONT
                    ? (card) => this.frontCard = card
                    : (card) => this.backCard = card
            };
            return React.cloneElement(
                child,
                cardFaceProps
            )
        })
        }

      </div>
    );
  }

  flip() {
    const sideOne = {animation: 'FlipCard-front 10000ms ease-in-out forwards'};
    const sideTwo = {animation: 'FlipCard-back 10000ms ease-in-out forwards'};
    const umbraA = {animation: 'FlipCard-umbraA 10000ms ease-in-out forwards'};
    const umbraB = {animation: 'FlipCard-umbraB 10000ms ease-in-out forwards'};
    const penumbraA = {animation: 'FlipCard-penumbraA 10000ms ease-in-out forwards'};
    const penumbraB = {animation: 'FlipCard-penumbraB 10000ms ease-in-out forwards'};

    switch (this.state.side) {
      case SIDES.FRONT:
        this.frontAnimation = sideOne;
        this.backAnimation = sideTwo;
        this.umbraAnimation = umbraA;
        this.penumbraAnimation = penumbraA;
        this.backCard.focus();
        this.setState({side: SIDES.BACK});
        break;
      case SIDES.BACK:
        this.frontAnimation = sideTwo;
        this.backAnimation = sideOne;
        this.umbraAnimation = umbraB;
        this.penumbraAnimation = penumbraB;
        this.frontCard.focus();
        this.setState({side: SIDES.FRONT});
        break;
      default:
        throw new Error('Unknown side');
    }
  }

}

FlipCard.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.element)
};

export default FlipCard;
