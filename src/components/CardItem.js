/* eslint-disable no-useless-return */
import React from 'react';
import PropTypes from 'prop-types';
import AuraPills from './AuraPills';
import starImages from '../data/starImages';
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

  auraColorChange = auraString => {
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
  };

  handleStars = stars => {
    switch (stars) {
      case 0.5:
        return starImages[1].src;
      case 1:
        return starImages[2].src;
      case 1.5:
        return starImages[3].src;
      case 2:
        return starImages[4].src;
      case 2.5:
        return starImages[5].src;
      case 3:
        return starImages[6].src;
      case 3.5:
        return starImages[7].src;
      case 4:
        return starImages[8].src;
      case 4.5:
        return starImages[9].src;
      case 5:
        return starImages[10].src;

      default:
        return starImages[0].src;
    }
  };

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
    const categories = business.categories.map(category => category.title).join(', ');
    return (
      <button key={business.id} className="resultCard" onClick={() => onOpenModal(business)}>
        <div className="resultCardImageContainer">
          <div className="pillsContainer">
            {business.attributes.aura.split(',').map(auraSingleton => (
              <AuraPills
                aura={auraSingleton}
                backgroundColor={this.auraColorChange(auraSingleton)}
                key={auraSingleton}
              />
            ))}
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
