/* eslint-disable react/prop-types */
import React from 'react';
import CardItem from './CardItem';

class SearchResults extends React.Component {
  render() {
    const { businesses, resultsTitle, onExpandDetails } = this.props;
    return (
      <div>
        {resultsTitle}
        <section id='searchResults'>
          <div className='resultCards'>
            {businesses.map(business => (
              <CardItem business={business} onExpandDetails={onExpandDetails} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default SearchResults;
