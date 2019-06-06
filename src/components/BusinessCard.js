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
import heartEmpty from '../assets/img/heartEmpty.png';
import heartFilled from '../assets/img/heartFilled.png';

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
        this.setState({ heartStatus: false });
      } else {
        this.setState({ heartStatus: true });
      }
    } else {
      this.setState({ heartStatus: true });
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

  // Method is used to toggle the state of heartStatus
  toggleImage = isAuthenticated => {
    if (isAuthenticated) {
      this.setState(state => ({ heartStatus: !state.heartStatus }));
    }
  };

  // Method used to obtain the string referring to the image based on heartStatus state
  getImageName = () => (this.state.heartStatus ? heartEmpty : heartFilled);

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
    const { business, handleOpen, likeBusiness, user, isAuthenticated } = this.props;
    // We cannot guarentee that the categories will not overflow in the cards with multiple categories.
    // FIXME: const categories = business.categories.map(category => category.title).join(', ');
    const categories = business.categories[0].title;
    // const utilizes method getImageName to get Image, refer to method above
    const imageName = this.getImageName(user.favorites, business);
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
        <div className="cardFooter">
          <img
            className="heart"
            src={imageName}
            alt="heart"
            role="button"
            onClick={event => {
              event.stopPropagation(); // Prevents modal (behind button) from activating
              likeBusiness(business); // Calls likeBusiness Method (Refer to AuraApp.js for actual method)
              this.toggleImage(isAuthenticated); // Calls toggleImage to change heartStatus State (Refer to method above)
            }}
          />
        </div>
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
