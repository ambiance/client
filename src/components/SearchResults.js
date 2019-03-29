/* eslint-disable react/prop-types */
import React from 'react';
import CardItem from './CardItem';

class SearchResults extends React.Component {
  render() {
    const { businesses, resultsTitle, onOpenModal } = this.props;
    if (businesses.length === 0) {
      return <div />;
    }
    return (
      <div>
        <h2>Search Results</h2>
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
