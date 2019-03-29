import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import CardItem from './CardItem';
import '../css/SearchResults.css';

class SearchResults extends React.Component {
  render() {
    const { businesses, loading } = this.props;
    return (
      <div>
        <h2>Search Results</h2>
        {loading ? (
          <Loader type="Triangle" color="#5abb9e" height="200" width="200" />
        ) : (
          <section id="searchResults">
            <div className="resultCards">
              {businesses.map((business, i) => (
                <CardItem key={i} business={business} />
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }
}

SearchResults.propTypes = {
  businesses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchResults;
