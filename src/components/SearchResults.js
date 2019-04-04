import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import CardItem from "./CardItem";
import "../css/SearchResults.css";

class SearchResults extends React.Component {
  render() {
    const { businesses, loading, onOpenModal } = this.props;
    if (loading) {
      return (
        <Loader type="Triangle" color="#5abb9e" height="200" width="200" />
      );
    }
    if (businesses.length === 0) {
      return <div />;
    }
    return (
      <div>
        <h2 className="searchResultsHeader">Search Results</h2>

        <section id="searchResults">
          <div className="resultCards">
            {businesses.map((business, i) => (
              <div>
                <CardItem key={i} business={business} onOpenModal={onOpenModal} />
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
};

export default SearchResults;
