import React from "react";
import CardItem from "./CardItem";

class SearchResults extends React.Component {
  render() {
    const { businesses, resultsTitle } = this.props;
    return (
      <div>
        {/* <h2 className="searchResultsTitle">Search Results</h2> */}
        {resultsTitle}
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
