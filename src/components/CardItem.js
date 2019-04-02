import React from "react";
import PropTypes from "prop-types";
import "../css/ResultCard.css";
import starImages from "./starImages";

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      expandDetails: ""
    };
  }

  handleStars = (stars) => {
    switch (stars) {
      case 0.5:
        return starImages[1].src;
        break;
      case 1:
        return starImages[2].src;
        break;
      case 1.5:
        return starImages[3].src;
        break;
      case 2:
        return starImages[4].src;
        break;
      case 2.5:
        return starImages[5].src;
        break;
      case 3:
        return starImages[6].src;
        break;
      case 3.5:
        return starImages[7].src;
        break;
      case 4:
        return starImages[8].src;
        break;
      case 4.5:
        return starImages[9].src;
        break;
      case 5:
        return starImages[10].src;
        break;
  
      default:
        return starImages[0].src;
    }
  }

  render() {
    // consts here
    const { business, onOpenModal } = this.props;
    return (
      <div
        key={business.id}
        className="resultCard"
        onClick={() => onOpenModal(business)}
      >
        <div className="resultCardImageContainer">
          <img
            className="resultCardImage"
            src={
              business.businessImage.src
                ? business.businessImage.src
                : "http://mymodernmet.com/wp/wp-content/uploads/2017/10/azuki-camping-hedgehog-3.jpg"
            }
            alt={
              business.businessImage.owner
                ? business.businessImage.owner
                : "No image owner provided"
            }
          />
        </div>

        <span className="resultCardTitle">{business.name}</span>
        <span className="resultCardSubtitle">{business.address}</span>
        <span className="resultCardSubtitle">
          {business.city}, {business.state} {business.postalCode}
        </span>
        <img className="resultCardStar" src={this.handleStars(business.stars)}/>
      </div>
    );
  }

  // this.querySelector(".resultCard").onClick
}

CardItem.propTypes = {
  business: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    attributes: PropTypes.shape({
      aura: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
