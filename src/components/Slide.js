import React from 'react';

const Slide = props => (
  <div className="slides">
    <h2 className="splashOverlay">{props.aura}</h2>
    <img src={props.img} alt="slide" className="centerSplash" />
  </div>
);

export default Slide;
