import React from 'react';
import PropTypes from 'prop-types';
import AuraPills from './AuraPills';
import '../css/ResultCard.css';
import starImages from '../data/starImages';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {};
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

  render() {
    // consts here
    const { business, onOpenModal } = this.props;

    return (
      <div key={business.id} className="resultCard" onClick={() => onOpenModal(business)}>
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
        <span className="resultCardSubtitle">{business.address}</span>
        <span className="resultCardSubtitle">
          {business.city}, {business.state} {business.postalCode}
        </span>
        <img className="resultCardStar" src={this.handleStars(business.stars)} alt="Rating Stars" />
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
  onOpenModal: PropTypes.func.isRequired,
};
