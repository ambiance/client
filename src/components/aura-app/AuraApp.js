import React from "react";
import Header from "../header/Header";
import SearchForm from "../search-form/SearchForm";

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
