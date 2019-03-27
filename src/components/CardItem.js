/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
import React from 'react';
import '../css/ResultCard.css';

export default class CardItem extends React.Component {
  render() {
    // consts here
    const { business, onExpandDetails } = this.props;
    return (
      <div key={business.id} className='resultCard'>
        <div className='resultCardImageContainer'>
          <img
            className='resultCardImage'
            src={
              business.img
                ? business.img
                : 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'
            }
            alt='pic'
          />
        </div>

        <span className='resultCardTitle'>{business.name}</span>

        <span className='resultCardSubtitle'>{business.address}</span>

        <span className='resultCardSubtitle'>
          {business.city}, {business.state} {business.postal_code}
        </span>

        <span className='resultCardAura'>{business.attributes.Aura}</span>

        <button onClick={() => onExpandDetails(business.id)}>
          Expand Below
        </button>
        <div className='expander'>{business.address}</div>
      </div>
    );
  }
}
