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
              business.businessImage.src
                ? business.businessImage.src
                : 'http://mymodernmet.com/wp/wp-content/uploads/2017/10/azuki-camping-hedgehog-3.jpg'
            }
            alt={
              business.businessImage.owner
                ? business.businessImage.owner
                : 'No image owner provided'
            }
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
