import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };
  }

  handleSearchSubmit = () => {
    axios
      .get('https://aurelia-server.herokuapp.com/api/businesses')
      .then(response => this.setState({ businesses: response.data }));
  };

  render() {
    return (
      <div>
        <SearchForm onSearchSubmit={this.handleSearchSubmit} />
        <SearchResults businesses={this.state.businesses} />
      </div>
    );
  }
}

export default Home;
