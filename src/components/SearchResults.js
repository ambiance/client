import React from 'react';
import CardItem from './CardItem';

class SearchResults extends React.Component {
  render() {
    const { businesses } = this.props;
    return (
      <div>
        <h2>Search Results</h2>

        <section id="searchResults">
          <div className="resultCards">
            {businesses.map(business => (
              <CardItem business={business} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default SearchResults;
