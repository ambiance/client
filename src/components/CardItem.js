/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-useless-return */
import React from 'react';
import PropTypes from 'prop-types';
import AuraPills from './AuraPills';
import { getColor } from './helpers/auraColors';
import locations from '../data/LALocations';
import '../styles/CardItem.scss';
import heartEmpty from '../assets/img/heartEmpty.png';
import heartFilled from '../assets/img/heartFilled.png';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      neighborhood: null,
      heartStatus: true, // State used to decided between heartEmpty or heartFilled image
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

  // Method is used to toggle the state of heartStatus
  toggleImage = () => {
    this.setState(state => ({ heartStatus: !state.heartStatus }));
  };

  // Method used to obtain the string referring to the image based on heartStatus state
  getImageName = () => (this.state.heartStatus ? heartEmpty : heartFilled);
  render() {
    // consts here
    const { business, onOpenModal, likeBusiness, likedBusinesses } = this.props;
    // We cannot guarentee that the categories will not overflow in the cards with multiple categories.
    // FIXME: const categories = business.categories.map(category => category.title).join(', ');
    const categories = business.categories[0].title;
    // const utilizes method getHeartStatus to find if user already liked this businesses to determine image
    // const utilizes method getImageName to get Image, refer to method above
    const imageName = this.getImageName();
    return (
      <button key={business.id} className="resultCard" onClick={() => onOpenModal(business)}>
        <div className="resultCardImageContainer">
          <div className="pillsContainer">
            {business.attributes.aura
              .split(',')
              .slice(0, 4)
              .map(auraSingleton => {
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

          <div className="cardFooter">
            <p>{categories}</p>

            <img
              className="heart"
              src={imageName}
              alt="heart"
              role="button"
              onClick={event => {
                event.stopPropagation(); // Prevents modal (behind button) from activating
                likeBusiness(business); // Calls likeBusiness Method (Refer to AuraApp.js for actual method)
                this.toggleImage(); // Calls toggleImage to change heartStatus State (Refer to method above)
              }}
            />
          </div>
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
  likeBusiness: PropTypes.func.isRequired,
  likedBusinesses: PropTypes.array.isRequired,
};
