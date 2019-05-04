/* eslint-disable no-useless-return */
import React from 'react';
import PropTypes from 'prop-types';
import AuraPills from './AuraPills';
import { getColor } from './helpers/auraColors';
import locations from '../data/LALocations';
import '../styles/CardItem.scss';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      neighborhood: null,
    };
  }

  componentDidMount() {
    const { postalCode, city } = this.props.business;
    if (city !== 'Los Angeles') this.setState({ neighborhood: city });
    else this.setNeighborhood(postalCode);
  }

  setNeighborhood = postalCode => {
    Object.keys(locations).forEach(location => {
      if (locations[location].includes(parseInt(postalCode))) {
        this.setState({ neighborhood: location });
        return;
      }
    });
  };

  render() {
    // consts here
    const { business, onOpenModal } = this.props;
    // We cannot guarentee that the categories will not overflow in the cards with multiple categories.
    // FIXME: const categories = business.categories.map(category => category.title).join(', ');
    const categories = business.categories[0].title;
    return (
      <button key={business.id} className="resultCard" onClick={() => onOpenModal(business)}>
        <div className="resultCardImageContainer">
          <div className="pillsContainer">
            {business.attributes.aura.split(',').map(auraSingleton => {
              const sanitizedAura = auraSingleton.trim().toLowerCase();
              return (
                <AuraPills
                  aura={sanitizedAura}
                  backgroundColor={getColor(sanitizedAura)}
                  key={auraSingleton}
                />
              );
            })}
          </div>

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
        <span className="resultCardSubtitle">
          <p>
            <strong>{this.state.neighborhood || business.city}</strong>
          </p>
          <p>{categories}</p>
        </span>
      </button>
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
  onOpenModal: PropTypes.func.isRequired,
};
