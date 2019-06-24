import React from 'react';
import PropTypes from 'prop-types';
import { handleStars } from './helpers/stars';

/**
 * @param {Object} props Passed props
 * @param {boolean} show Display flag
 * @param {Object} details Business details
 */
const BusinessDescription = ({ show, details }) => {
  const starSrc = handleStars(show ? details.stars : 0);
  return (
    <div className="businessDetails">
      <div className="detailSection">
        <ul className="categories">
          {show
            ? details.categories.map(category => (
                <li className="category" key={category.title}>
                  {category.title}
                </li>
              ))
            : 'No categories'}
        </ul>
        <ul className="address">
          {show ? details.displayAddress.map(addr => <li key={addr}>{addr}</li>) : 'No address'}
        </ul>
        <p className="info">{show ? details.attributes.priceRange : 'No range'}</p>
      </div>
      <div className="pictureSection">
        <div className="pictureContainer">
          {show && <img className="pic" src={details.businessImage.src} alt={details.name} />}
        </div>
        {/* FIXME: Remove the code block if you do not need it. */}
        {/* <a
          className="yelpLink"
          target="_blank"
          rel="noopener noreferrer"
          href={show ? details.url : ""}
        >
          <img
            className="yelpPic"
            src="./assets/img/yelpButton.jpg"
            alt="yelp"
          />
          <p className="yelpClick">Click for more details!</p>
        </a> */}
        <img className="modalStar" src={starSrc} alt="stars" />
      </div>
    </div>
  );
};

BusinessDescription.propTypes = {
  details: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
};

export default BusinessDescription;
