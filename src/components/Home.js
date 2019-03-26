import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Footer from './Footer';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      businesses: [],
    };
  }

  handleSearchSubmit = () => {
    axios
      .get('https://aurelia-server.herokuapp.com/api/resources')
      .then(response => this.setState({ businesses: response.data }));
  };

  render() {
    return (
      <div>
        <SearchForm onSearchSubmit={this.handleSearchSubmit} />
        <SearchResults businesses={this.state.businesses} />
        <Footer />
      </div>
    );
  }
}

export default Home;
