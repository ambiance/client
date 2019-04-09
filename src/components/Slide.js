import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css';

const getColor = aura => {
  switch (aura) {
    case 'imaginative':
      return '#74e0c0';
    case 'lively':
      return '#f268ff';
    case 'intimate':
      return '#e21220';
    // #ff56cc
    case 'exotic':
      return '#61c448';
    case 'groovy':
      return '#e5e249';
    case 'inspired':
      return '#93ffb4';
    case 'upscale':
      return '#ea9409';
    case 'hipster':
      return 'var(--hipster)';
    case 'cheerful':
      return 'var(--cheerful)';
    case 'peaceful':
      return '#c4efff';
    case 'powerful':
      return '#bc1414';
    case 'classy':
      return '#ffaded';
    default:
      return 'white';
  }
};

const Slide = props => (
  <div className="slides">
    <h2 className="splashOverlay">
      What is your <b style={{ color: getColor(props.aura) }}>aura</b>?
    </h2>
    <h2 className="splashOverlayAura" style={{ color: getColor(props.aura) }}>
      {props.aura}
    </h2>
    <img src={props.img} alt="slide" className="centerSplash" />
  </div>
);

Slide.propTypes = {
  aura: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};

export default Slide;
