import React from 'react';
import PropTypes from 'prop-types';
import '../css/ResultCard.css';

export default class CardItem extends React.Component {
  render() {
    // consts here
    const { business } = this.props;
    return (
      <div className="resultCard">
        <div className="resultCardImageContainer">
          <img
            className="resultCardImage"
            src={
              business.img
                ? business.img
                : 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'
            }
            alt="Jon Azali"
          />
        </div>

        <span className="resultCardTitle">{business.name}</span>

        <span className="resultCardSubtitle">{business.address}</span>

        <span className="resultCardSubtitle">
          {business.city}, {business.state} {business.postal_code}
        </span>

        <span className="resultCardAura">{business.attributes.Aura}</span>
      </div>
    );
  }
}

CardItem.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postal_code: PropTypes.string.isRequired,
    attributes: PropTypes.shape({
      Aura: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
