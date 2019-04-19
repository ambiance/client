import React from 'react';
import PropTypes from 'prop-types';
import AuraPills from './AuraPills.js';
import Map from './Map';
import '../css/Modal.css';
import '../css/palette.css';
import starImages from '../data/starImages';

const Modal = props => {
  const starSrc = handleStars(props.show ? props.details.details.stars : 0);

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
        onClick={props.close}
        style={{
          // transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '0.5' : '0',
          position: props.show ? 'fixed' : 'absolute',
          zIndex: props.show ? '15' : '-5',
        }}
      />

      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-200vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        <div className="modal-header">
          <h3>{props.show ? props.details.details.name : ''}</h3>
          <span className="modalPillsContainer">
            {props.show
              ? props.details.details.attributes.aura
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
          <button className="close-modal-btn" onClick={props.close}>
            ×
          </button>
        </div>

        <div className="businessMap">
          {/* BROCK: This was changed from 'MapContainer' to 'Map' because of your 
        naming in the MapContainer component */}
          <Map className="modalMap" details={props.details.details} />
        </div>
        <div className="businessDetails">
          <ul className="categories">
            {props.show
              ? props.details.details.categories.map(category => (
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
          </a>
        </div>
        <div className="modal-footer" />
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
};

export default Modal;
