/* eslint-disable no-useless-return */
import React from 'react';
import PropTypes from 'prop-types';
// components
import AuraPill from './AuraPill';
// helpers
import { getColor } from './helpers/auraColors';
import locations from '../data/LALocations';
// data
import auras from '../data/auraDescriptions';
// cscc
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

  handleKeyPress = event => {
    // Check to see if space or enter were pressed
    if (event.key === ' ' || event.key === 'Enter' || event.key === 'Spacebar') {
      // "Spacebar" for IE11 support
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
    }
  };

  render() {
    // consts here
    const { business, handleOpen } = this.props;
    // We cannot guarentee that the categories will not overflow in the cards with multiple categories.
    // FIXME: const categories = business.categories.map(category => category.title).join(', ');
    const categories = business.categories[0].title;
    return (
      // FIXME: Fix the onKeyPress for accessibility
      <div
        className="resultCard"
        role="button"
        tabIndex="0"
        aria-pressed="false"
        onClick={() => handleOpen(business)}
        onKeyPress={event => {
          this.handleKeyPress(event);
          handleOpen(business);
        }}
      >
        <div className="pillsContainer">
          {business.attributes.aura
            .split(',')
            .slice(0, 4)
            .map(auraSingleton => {
              const sanitizedAura = auraSingleton.trim().toLowerCase();
              return (
                <AuraPill
                  key={auraSingleton}
                  aura={sanitizedAura}
                  backgroundColor={getColor(sanitizedAura)}
                  toolTip={{
                    position: 'top',
                    description: auras[sanitizedAura].definition,
                    upVote: 1,
                  }}
                />
              );
            })}
        </div>
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
        <span className="resultCardSubtitle">
          <p>
            <strong>{this.state.neighborhood || business.city}</strong>
          </p>
          <p>{categories}</p>
        </span>
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
  handleOpen: PropTypes.func.isRequired,
};
