import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuraPills from './AuraPills.js';
import Map from './Map';
import starImages from '../data/starImages';
// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import '../styles/Modal.scss';
import ModalWindow from './ModalWindow';
import BusinessDescription from './BusinessDescription';
import Feedback from './Feedback';

const Modal = ({ show, details, close }) => {
  const [component, setComponent] = useState(0);

  useEffect(() => setComponent(<BusinessDescription show={show} details={details.details} />));
  function auraColorChange(auraString) {
    let colorString = ``;
    switch (auraString) {
      case 'trendy':
        colorString = `var(--trendy)`;
        break;
      case 'romantic':
        colorString = `var(--romantic)`;
        break;
      case 'hipster':
        colorString = `var(--hipster)`;
        break;
      case 'casual':
        colorString = `var(--casual)`;
        break;
      case 'inspired':
        colorString = `var(--inspired)`;
        break;
      case 'intimate':
        colorString = `var(--intimate)`;
        break;
      case 'classy':
        colorString = `var(--classy)`;
        break;
      case 'touristy':
        colorString = `var(--touristy)`;
        break;
      case 'cheerful':
        colorString = `var(--cheerful)`;
        break;
      default:
        colorString = `var(--mint)`;
    }
    const style = colorString;
    return style;
  }

  return (
    <div>
      <button
        className="modal-backdrop"
        onClick={close}
        style={{
          opacity: show ? '0.5' : '0',
          position: show ? 'fixed' : 'absolute',
          zIndex: show ? '15' : '-5',
        }}
      />

      <div
        className="modal-wrapper"
        style={{
          transform: show ? 'translateY(0vh)' : 'translateY(-200vh)',
          opacity: show ? '1' : '0',
        }}
      >
        <div className="modal-header">
          <h3>{show ? details.details.name : ''}</h3>
          <span className="modalPillsContainer">
            {show
              ? details.details.attributes.aura
                  .split(',')
                  .map(auraSingleton => (
                    <AuraPills
                      key={auraSingleton}
                      aura={auraSingleton}
                      backgroundColor={auraColorChange(auraSingleton)}
                    />
                  ))
              : ''}
          </span>
          <button className="close-modal-btn" onClick={close}>
            &#9587;
          </button>
        </div>

        <div className="navBar">
          {/* BROCK: This was changed from 'MapContainer' to 'Map' because of your 
        naming in the MapContainer component */}
          <div>
            <ul className="navContainer">
              <li className="modalLI">
                <button
                  className="modalNav"
                  onClick={() =>
                    setComponent(<BusinessDescription show={show} details={details.details} />)
                  }
                >
                  Description
                </button>
              </li>
              <li className="modalLI">
                <button className="modalNav" onClick={() => setComponent(<Map />)}>
                  Map
                </button>
              </li>
              <li className="modalLI">
                <button className="modalNav" onClick={() => setComponent(<Feedback />)}>
                  Feedback
                </button>
              </li>
            </ul>
          </div>
        </div>
        <ModalWindow component={component} />
      </div>
    </div>
  );
};

function handleStars(stars) {
  switch (stars) {
    case 0.5:
      return starImages[12].src;
    case 1:
      return starImages[13].src;
    case 1.5:
      return starImages[14].src;
    case 2:
      return starImages[15].src;
    case 2.5:
      return starImages[16].src;
    case 3:
      return starImages[17].src;
    case 3.5:
      return starImages[18].src;
    case 4:
      return starImages[19].src;
    case 4.5:
      return starImages[20].src;
    case 5:
      return starImages[21].src;
    default:
      return starImages[11].src;
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  details: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  // map: PropTypes.bool.isRequired,
};

export default Modal;
