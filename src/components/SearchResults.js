import React from "react";

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <h2>Search Results</h2>

        <section id="searchResults">
          <div className="resultCards" />
        </section>
      </div>
    );
  }
}

export default SearchResults;
