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
import '../styles/BusinessCard.scss';

export default class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      neighborhood: null,
      heartStatus: false, // State used to decided between heartEmpty or heartFilled image
    };
  }

  componentWillMount() {
    const { user, business } = this.props;
    // user favorites is undefined (logged in with an empty favorites array or not logged in at all)
    if (user.favorites !== undefined) {
      const tempArray = user.favorites.filter(
        likedBusiness => likedBusiness.businessId === business._id
      );
      if (tempArray.length !== 0) {
        this.setState({ heartStatus: true });
      }
    }
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
      }
    });
  };

  /**
   * Method is used to toggle the state of heartStatus
   * @param {boolean} isAuthenticated User auth flag
   */
  toggleImage = isAuthenticated => {
    if (isAuthenticated) {
      // FIXME: We are not supposed to set state like this.
      this.setState(state => ({ heartStatus: !state.heartStatus }));
    }
  };

  handleKeyPress = event => {
    // Check to see if space or enter were pressed
    if (event.key === ' ' || event.key === 'Enter' || event.key === 'Spacebar') {
      // "Spacebar" for IE11 support
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
    }
  };

  /**
   * Handles the logic for "liking" or "unliking" a business
   * @param {Event} event Button event
   */
  handleToggleLike = event => {
    const { business, likeBusiness, isAuthenticated } = this.props;
    event.stopPropagation(); // Prevents modal (behind button) from activating
    likeBusiness(business); // Calls likeBusiness Method (Refer to AuraApp.js for actual method)
    this.toggleImage(isAuthenticated);
  };

  render() {
    // consts here
    const { business, handleOpen } = this.props;
    const { heartStatus } = this.state;
    // We cannot guarentee that the categories will not overflow in the cards with multiple categories.
    // FIXME: const categories = business.categories.map(category => category.title).join(', ');
    const categories = business.categories[0].title;
    return (
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
                    description: auras[sanitizedAura] ? auras[sanitizedAura].definition : '',
                    // FIXME: Does not show results right away... Requires search to update vote data.
                    upVote: business.auras[sanitizedAura] ? business.auras[sanitizedAura] : 0,
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
        <button className="resultCardHeart" onClick={event => this.handleToggleLike(event)}>
          {heartStatus ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
        </button>
      </div>
    );
  }
}

BusinessCard.propTypes = {
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
  likeBusiness: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
