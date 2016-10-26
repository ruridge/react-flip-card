import React from 'react';
import _ from 'underscore';
import Umbra from './Umbra';
import Penumbra from './Penumbra';
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
    const cardStyles = {width: this.props.width, height: this.props.height}

    return (
      <div className="FlipCard" style={cardStyles}>
        <Umbra width={this.props.width} height={this.props.height} animation={this.umbraAnimation} />
        <Penumbra width={this.props.width} height={this.props.height} animation={this.penumbraAnimation} />

        {React.Children.map(this.props.children, (child, i) => {
            const side = i + 1;
            // build props obj
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
    const sideOne = {animation: 'FlipCard-front 800ms ease-in-out forwards'};
    const sideTwo = {animation: 'FlipCard-back 800ms ease-in-out forwards'};
    const umbraA = {animation: 'FlipCard-umbraA 800ms ease-in-out forwards'};
    const umbraB = {animation: 'FlipCard-umbraB 800ms ease-in-out forwards'};
    const penumbraA = {animation: 'FlipCard-penumbraA 800ms ease-in-out forwards'};
    const penumbraB = {animation: 'FlipCard-penumbraB 800ms ease-in-out forwards'};

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
    children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired
};

export default FlipCard;
