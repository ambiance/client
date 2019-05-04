import React from 'react';
import PropTypes from 'prop-types';
import { handleStars } from './helpers/stars';

const BusinessDescription = ({ show, details }) => {
  const starSrc = handleStars(show ? details.stars : 0);
  return (
    <div className="businessDetails">
      <ul className="categories">
        {show
          ? details.categories.map(category => <li key={category.title}>{category.title}</li>)
          : 'No categories'}
      </ul>
      <ul className="address">
        {show ? details.displayAddress.map(addr => <li key={addr}>{addr}</li>) : 'No address'}
      </ul>
      <p className="info">{show ? details.attributes.priceRange : 'No range'}</p>
      <img className="modalStar" src={starSrc} alt="stars" />
      <a
        className="yelpLink"
        target="_blank"
        rel="noopener noreferrer"
        href={show ? details.url : ''}
      >
        <img className="yelpPic" src="./assets/img/yelpButton.jpg" alt="yelp" />
        <p className="yelpClick">Click for more details!</p>
      </a>
    </div>
  );
};

BusinessDescription.propTypes = {
  details: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
};
export default BusinessDescription;
