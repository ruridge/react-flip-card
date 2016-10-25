import React from 'react';
import _ from 'underscore';
import './CardFace.css';

class CardFace extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    focus() {
        // Explicitly focus the text input using the raw DOM API
        this.button.focus();
    }

    render() {
        const cardClassNames = `FlipCard-${this.props.side}`;
        const cardContentStyles = _.extend({position: 'absolute', height: '100%'}, this.props.style);
        return (
            <div className={cardClassNames} style={this.props.animation}>
                <div className="FlipCard-content" style={cardContentStyles}>
                    {this.props.children}
                </div>
                <button
                    onClick={this.props.flip}
                    tabIndex={this.props.active ? 0 : -1}
                    ref={(btn) => this.button = btn}>Flip Card</button>
            </div>
        );
    }

}

CardFace.defaultProps = {
    animation: {}
};

CardFace.propTypes = {
    side: React.PropTypes.oneOf(['front', 'back']),
    flip: React.PropTypes.func,
    animation: React.PropTypes.object,
    active: React.PropTypes.bool
};

export default CardFace;
