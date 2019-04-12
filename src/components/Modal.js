import React from 'react';
import PropTypes from 'prop-types';
import AuraPills from './AuraPills.js';
// import CardItem from './CardItem';
import Map from './Map';
import MapContainer from './Map';
import '../css/Modal.css';
import '../css/palette.css';
import starImages from './starImages';

const Modal = props => {
  const starSrc = handleStars(props.show ? props.details.details.stars : 0);
  // const styleObject = auraColorChange(
  //   props.show ? props.details.details.attributes.aura : ''
  // );

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
      <div
        className='modal-backdrop'
        onClick={props.close}
        role='button'
        style={{
          // transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '0.5' : '0',
          position: props.show ? 'fixed' : 'absolute',
          zIndex: props.show ? '15' : '-5'
        }}
      />

      <div
        className='modal-wrapper'
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        <div className='modal-header'>
          <h3>
            {props.show ? props.details.details.name : ''}

            <span className='modalPillsContainer'>
              {props.show
                ? props.details.details.attributes.aura
                    .split(',')
                    .map(auraSingleton => (
                      <AuraPills
                        aura={auraSingleton}
                        backgroundColor={auraColorChange(auraSingleton)}
                      />
                    ))
                : ''}
            </span>
          </h3>

          <button className='close-modal-btn' onClick={props.close}>
            ×
          </button>
        </div>

        <div className='businessMap'>
          <MapContainer className='modalMap' details={props.details.details} />
        </div>
        <div className='businessDetails'>
          <ul className='categories'>
            {props.show
              ? props.details.details.categories.map(category => (
                <li>{category.title}</li>
                ))
              : ''}
          </ul>
          <p className='info'>
            {props.show ? props.details.details.displayAddress[0] : ''}
          </p>
          <p className='info'>
            {props.show ? props.details.details.displayAddress[1] : ''}
          </p>
          <p className='info'>
            {props.show ? props.details.details.attributes.priceRange : ''}
          </p>
          <img className='modalStar' src={starSrc} />
          <a
            className='yelpLink'
            href={props.show ? props.details.details.url : ''}
            target='_blank'
          >
            <img className='yelpPic' src='./assets/img/yelpButton.jpg' />
            Click for more details!
            {/* <p className="yelpCall">Click for more details!</p> */}
          </a>
        </div>
        <div className='modal-footer' />
      </div>
    </div>
  );
};

const handleStars = stars => {
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
};

Modal.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    attributes: PropTypes.shape({
      aura: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Modal;
