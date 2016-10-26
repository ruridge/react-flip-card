import React from 'react';
import _ from 'underscore';
import './Penumbra.css';

const Penumbra = (props) => {
    const penumbraWidth = props.width + 70;
    const penumbraHeight = props.height + 70;

    const penumbraStyles = _.extend({width: penumbraWidth, height: penumbraHeight}, props.animation);

    return (
        <div className="FlipCard-penumbra" style={penumbraStyles}>
            <svg version="1.1" className="shape-reference" xmlns="http://www.w3.org/2000/svg" width={penumbraWidth} height={penumbraHeight}>
              <defs>
                <filter id="blur-12">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
                </filter>
              </defs>
              <rect filter="url(#blur-12)" id="Rectangle" stroke="none" fill="#000000" fillRule="evenodd" x="35" y="35" width={props.width} height={props.height}></rect>
            </svg>
        </div>
    );
};

Penumbra.propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    animation: React.PropTypes.object
};

export default Penumbra;
