import React from 'react';
import _ from 'underscore';
import './Umbra.css';

const Umbra = (props) => {
    const umbraWidth = props.width + 10;
    const umbraHeight = props.height + 10;

    const umbraStyles = _.extend({width: umbraWidth, height: umbraHeight}, props.animation);

    return (
        <div className="FlipCard-umbra" style={umbraStyles}>
            <svg version="1.1" className="shape-reference" xmlns="http://www.w3.org/2000/svg" width={umbraWidth} height={umbraHeight}>
              <defs>
                <filter id="blur-2">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
              </defs>
              <rect filter="url(#blur-2)" id="Rectangle" stroke="none" fill="#000000" fillRule="evenodd" x="5" y="5" width={props.width} height={props.height}></rect>
            </svg>
        </div>
    );
};

Umbra.propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    animation: React.PropTypes.object
};

export default Umbra;
