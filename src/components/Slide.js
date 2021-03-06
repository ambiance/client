import React from 'react';
import PropTypes from 'prop-types';
import { getColor } from './helpers/auraColors';

const Slide = props => (
  <div className="slides">
    <h2 className="splashOverlay">
      What is your{' '}
      <b
        style={{
          color: getColor(props.aura),
          textShadow: props.aura === 'classy' ? '2px 2px 4px #ffffff' : '2px 2px 4px #000000c7',
        }}
      >
        aura
      </b>
      ?
    </h2>
    <h2
      className="splashOverlayAura"
      style={{
        color: getColor(props.aura),
        textShadow: props.aura === 'classy' ? '2px 2px 4px #ffffff' : '2px 2px 4px #000000c7',
      }}
    >
      {props.aura}
    </h2>
    <img src={props.img} alt="slide" className="centerSplash" />
  </div>
);

Slide.propTypes = {
  aura: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  // question: PropTypes.string.isRequired,
};

export default Slide;
