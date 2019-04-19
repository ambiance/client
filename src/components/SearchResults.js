import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import CardItem from './CardItem';
import '../css/SearchResults.css';

class SearchResults extends React.Component {
  render() {
    const { businesses, loading, noData, onOpenModal } = this.props;
    if (loading) {
      return <Loader type="Triangle" color="#5abb9e" height="100vh" width="100%" />;
    }
    if (noData) {
      return (
        <div>
          <section className="errorpage">No Results found try using a different Aura.</section>
        </div>
      );
    }
    if (businesses.length === 0) {
      if (noData) {
        return (
          <div>
            <h2 className="errorTitle">
              Sorry but our database does not have the information you are looking for, please
              search again using different filters.
            </h2>
          </div>
        );
      }
      return <div />;
    }
    return (
      <div>
        <section id="searchResults">
          <div className="resultCards">
            {businesses.map((business, i) => (
              <div key={i}>
                <CardItem business={business} onOpenModal={onOpenModal} />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

SearchResults.propTypes = {
  businesses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  noData: PropTypes.bool.isRequired,
};

export default SearchResults;
