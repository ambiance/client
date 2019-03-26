import React from 'react';
import PropTypes from 'prop-types';
import '../css/ResultCard.css';

export default class CardItem extends React.Component {
  render() {
    const { business } = this.props;
    return (
      <div className="resultCard">
        <div className="resultCardImageContainer">
          <img
            className="resultCardImage"
            src={
              business.businessImage
                ? business.businessImage.src
                : 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'
            }
            alt={business.name}
          />
        </div>

        <span className="resultCardTitle">{business.name}</span>
        <span className="resultCardSubtitle">{business.address}</span>
        <span className="resultCardSubtitle">
          {business.city}, {business.state} {business.postalCode}
        </span>
        <span className="resultCardAura">{business.attributes.aura}</span>
      </div>
    );
  }
}

CardItem.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    attributes: PropTypes.shape({
      aura: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
