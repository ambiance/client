import React from 'react';

class BusinessDescription extends React.Component {
  render() {
    return <div>DESC BITch</div>;
  }
}
export default BusinessDescription;

// (
// <div>
//     <ul className="categories">
//     {props.show
//       ? props.details.details.categories.map(category => (
//           <li key={category.title}>{category.title}</li>
//         ))
//       : ''}
//   </ul>
//   <ul className="address">
//   {props.show
//     ? props.details.details.displayAddress.map(addr => <li key={addr}>{addr}</li>)
//     : ''}
//  </ul>
//   <p className="info">{props.show ? props.details.details.attributes.priceRange : ''}</p>
//   <img className="modalStar" src={starSrc} alt="stars" />
//   <a
//   className="yelpLink"
//     target="_blank"
//     rel="noopener noreferrer"
//   href={props.show ? props.details.details.url : ''}
//   >
//   <img className="yelpPic" src="./assets/img/yelpButton.jpg" alt="yelp" />
//   <p className="yelpClick">Click for more details!</p>
//   </a>
//   </div>
// )
