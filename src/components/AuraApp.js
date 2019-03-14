import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";

class AuraApp extends React.Component {
  render() {
    return (
      <body>
        <Header />
        <SearchForm />
      </body>
    );
  }
}

export default AuraApp;
