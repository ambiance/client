/* eslint-disable react/prop-types */
import React from 'react';
import CardItem from './CardItem';

class SearchResults extends React.Component {
  render() {
    const { businesses, resultsTitle, onOpenModal } = this.props;
    return (
      <div>
        {resultsTitle}
        <section id='searchResults'>
          <div className='resultCards'>
            {businesses.map(business => (
              <div>
                <CardItem business={business} onOpenModal={onOpenModal} />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default SearchResults;
