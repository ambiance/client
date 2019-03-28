/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import axios from 'axios';

// Components
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Footer from './Footer';
import Modal from './Modal';

// Third Party Imports
const shortid = require('shortid');

class Home extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      resultsTitle: '',
      modalDetails: '',
      businesses: [],
      isShowing: false
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
  };

  // Functions for Modals
  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  render() {
    return (
      <div>
        <Modal
          className='modal'
          show={this.state.isShowing}
          close={this.closeModalHandler}
        >
          {this.state.modalDetails}
        </Modal>

        <SearchForm onSearchSubmit={this.handleSearchSubmit} />

        <SearchResults
          businesses={this.state.businesses}
          resultsTitle={this.state.resultsTitle}
          onOpenModal={this.openModalHandler}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;
