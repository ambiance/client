import React from "react";
import PropTypes from "prop-types";
import starImages from "../data/starImages";

const BusinessDescription = ({ show, details }) => {
  const starSrc = handleStars(show ? details.stars : 0);
  return (
    <div className="businessDetails">
      <ul className="categories">
        {show
          ? details.categories.map(category => (
              <li key={category.title}>{category.title}</li>
            ))
          : "No categories"}
      </ul>
      <ul className="address">
        {show
          ? details.displayAddress.map(addr => <li key={addr}>{addr}</li>)
          : "No address"}
      </ul>
      <p className="info">
        {show ? details.attributes.priceRange : "No range"}
      </p>
      <img className="modalStar" src={starSrc} alt="stars" />
      <a
        className="yelpLink"
        target="_blank"
        rel="noopener noreferrer"
        href={show ? details.url : ""}
      >
        <img className="yelpPic" src="./assets/img/yelpButton.jpg" alt="yelp" />
        <p className="yelpClick">Click for more details!</p>
      </a>
    </div>
  );
};

function handleStars(stars) {
  switch (stars) {
    case 0.5:
      return starImages[12].src;
    case 1:
      return starImages[13].src;
    case 1.5:
      return starImages[14].src;
    case 2:
      return starImages[15].src;
    case 2.5:
      return starImages[16].src;
    case 3:
      return starImages[17].src;
    case 3.5:
      return starImages[18].src;
    case 4:
      return starImages[19].src;
    case 4.5:
      return starImages[20].src;
    case 5:
      return starImages[21].src;
    default:
      return starImages[11].src;
  }
}

BusinessDescription.propTypes = {
  details: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired
};
export default BusinessDescription;
