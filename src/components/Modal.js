import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import AuraPill from './AuraPill';
import Map from './Map';
import ModalWindow from './ModalWindow';
import BusinessDescription from './BusinessDescription';
import Feedback from './Feedback';
// import Feedback from './Feedback';
import { getColor } from './helpers/auraColors';
// import { handleStars } from './helpers/stars';
import '../styles/Modal.scss';

const Modal = ({ show, details, voteDetails, close, handleAuraVote, handleInitialFeedback }) => {
  const [component, setComponent] = useState(<BusinessDescription show={show} details={details} />);

  useEffect(
    () =>
      setComponent(
        <Feedback
          show={show}
          details={details}
          voteDetails={voteDetails}
          handleAuraVote={handleAuraVote}
        />
      ),
    [voteDetails]
  );
  useEffect(() => setComponent(<BusinessDescription show={show} details={details} />), [show]);

  return (
    <div>
      <button
        className="modalBackdrop"
        onClick={close}
        style={{
          opacity: show ? '0.5' : '0',
          position: show ? 'fixed' : 'absolute',
          zIndex: show ? '15' : '-5'
        }}
      />

      <div
        className="modalWrapper"
        style={{
          transform: show ? 'translateY(0vh)' : 'translateY(-200vh)',
          opacity: show ? '1' : '0'
        }}
      >
        <header className="modalHeader">
          <h3>{show ? details.name : ''}</h3>
          <div className="modalPillsContainer">
            {show
              ? details.attributes.aura.split(',').map(auraSingleton => {
                  const sanitizedAura = auraSingleton.trim().toLowerCase();
                  return (
                    <AuraPill
                      aura={sanitizedAura}
                      backgroundColor={getColor(sanitizedAura)}
                      key={auraSingleton}
                      toolTip={{ position: 'bottom', description: sanitizedAura }}
                    />
                  );
                })
              : ''}
          </div>
          <button className="closeModalBtn" onClick={close}>
            &#9587;
          </button>
        </header>

        <div className="navBar">
          <ul className="navContainer">
            <li className="modalLI">
              <button
                className="modalNav"
                onClick={() => setComponent(<BusinessDescription show={show} details={details} />)}
              >
                Description
              </button>
            </li>
            <li className="modalLI">
              <button
                className="modalNav"
                onClick={() => setComponent(<Map show={show} details={details} />)}
              >
                Map
              </button>
            </li>
            <li className="modalLI">
              <button
                className="modalNav"
                onClick={() => {
                  setComponent(
                    <Feedback
                      show={show}
                      details={details}
                      voteDetails={voteDetails}
                      handleAuraVote={handleAuraVote}
                    />
                  );
                }}
              >
                Feedback
              </button>
            </li>
            <li className="yelpLinkLI">
              {/* <button
                className="modalNav"
                onClick={() => {
                  setComponent(
                    <Feedback
                      show={show}
                      details={details}
                      voteDetails={voteDetails}
                      handleAuraVote={handleAuraVote}
                    />
                  );
                }}
              > */}
              <a className="modalNav" href={details.url} target="_blank">
                Link to Yelp!
              </a>
              {/* </button> */}
            </li>
            {/* <li className="modalLI">
              <button className="modalNav" onClick={() => setComponent(<Feedback />)}>
                Feedback
              </button>
            </li> */}
          </ul>
        </div>
        {/* <div className="businessDetails"> */}
        <div className="componentWindow">
          <ModalWindow details={details} show={show} component={component} />
        </div>
        {/* <ul className="categories">
            {props.show
              ? props.details.categories.map(category => (
                  <li key={category.title}>{category.title}</li>
                ))
              : ''}
          </ul>
          <ul className="address">
            {props.show
              ? props.details.details.displayAddress.map(addr => <li key={addr}>{addr}</li>)
              : ''}
          </ul>
          <p className="info">{props.show ? props.details.details.attributes.priceRange : ''}</p>
          <img className="modalStar" src={starSrc} alt="stars" />
          <a
            className="yelpLink"
            target="_blank"
            rel="noopener noreferrer"
            href={props.show ? props.details.details.url : ''}
          >
            <img className="yelpPic" src="./assets/img/yelpButton.jpg" alt="yelp" />
            <p className="yelpClick">Click for more details!</p>
          </a> */}
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  details: PropTypes.object.isRequired,
  voteDetails: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  handleAuraVote: PropTypes.func.isRequired,
  // map: PropTypes.bool.isRequired,
};

export default Modal;
