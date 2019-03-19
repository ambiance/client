import React from "react";
import Header from "./Header";

import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

class AuraApp extends React.Component {
  render() {
    return (
      <body>
        <Header />
        <SearchForm />
        <SearchResults />
      </body>
    );
  }
}

export default AuraApp;
