import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
      loading: false,
    };
  }

  handleSearchSubmit = searchFormData => {
    this.setState({ loading: true });
    axios
      .get('https://aurelia-server.herokuapp.com/api/businesses', {
        params: {
          aura: searchFormData.auraValue,
        },
      })
      .then(response => this.setState({ businesses: response.data }))
      .then(() =>
        window.scroll({
          top: 635,
          left: 0,
          behavior: 'smooth',
        })
      )
      .then(() => this.setState({ loading: false }));
  };

  render() {
    return (
      <div>
        <SearchForm onSearchSubmit={this.handleSearchSubmit} />
        <SearchResults loading={this.state.loading} businesses={this.state.businesses} id="results" />
      </div>
    );
  }
}

export default Home;
