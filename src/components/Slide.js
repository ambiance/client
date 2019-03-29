import React from "react";
import PropTypes from "prop-types";

const Slide = props => (
  <div className="slides">
    <h2 className="splashOverlay">{props.question}</h2>
    <h2 className="splashOverlayAura">{props.aura}</h2>
    <img src={props.img} alt="slide" className="centerSplash" />
  </div>
);

Slide.propTypes = {
  aura: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired
};

export default Slide;
