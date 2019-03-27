/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import axios from 'axios';

// Components
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Footer from './Footer';

// Third Party Imports
const shortid = require('shortid');

class Home extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      resultsTitle: '',
      expandDetails: '',
      businesses: []
    };
  }

  handleSearchSubmit = () => {
    this.setState({ resultsTitle: <h2>"Search Results"</h2> });
    axios
      .get('https://aurelia-server.herokuapp.com/api/resources')
      .then(response => {
        // get the response data and assign unique ID for each one
        response.data.map(single => (single.id = shortid.generate()));
        return this.setState({ businesses: response.data });
      });

    console.log(this.state.businesses);
  };

  handleExpandDetails = id => {
    const businessList = this.state.businesses;
    const businessIndex = businessList.findIndex(
      business => business.id === id
    );
    console.log(businessList[businessIndex]);

    document.querySelectorAll('expander').setAttribute('display', 'block');
  };

  render() {
    return (
      <div>
        <SearchForm onSearchSubmit={this.handleSearchSubmit} />
        <SearchResults
          businesses={this.state.businesses}
          resultsTitle={this.state.resultsTitle}
          onExpandDetails={this.handleExpandDetails}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
