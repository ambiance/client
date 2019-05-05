import React from 'react';

// Components
import PropTypes from 'prop-types';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Modal from '../components/Modal';

import API, { alertErrorHandler } from '../services/API';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.searchRef = React.createRef();

    this.state = {
      // modalDetails: '',
      businesses: [],
      loading: false,
      noData: false,
      showResults: false,
    };
  }

  handleSearchSubmit = searchFormData => {
    // Warn the user that there is already a request being made
    if (this.state.loading) {
      // TODO: Talk to the team about what we want to do when many requests are being made.
    }

    // Start the loader to ease waiting time.
    this.setState({ showResults: true, loading: true }, () => {
      window.scroll({
        top: this.searchRef.current.offsetTop - 50,
        left: 0,
        passive: true,
      });
    });

    // Dynamically add search parameters based on the results from the search form.
    const params = {};
    if (searchFormData.auraValue !== '') {
      params.aura = searchFormData.auraValue;
    }
    if (searchFormData.categoryValue !== '') {
      params.category = searchFormData.categoryValue;
    }
    if (searchFormData.cityValue !== '') {
      params.city = searchFormData.cityValue;
    }

    // Make a request to the Aura Server for business information.
    API.get('businesses', {
      params,
    })
      .then(response => {
        this.setState({ businesses: response.data });
        if (response.data.length === 0) {
          this.setState({ noData: true });
        } else {
          this.setState({ noData: false });
        }
      })
      .then(() => this.setState({ loading: false }))
      .catch(err => {
        alertErrorHandler(err);
        this.setState({ showResults: false, loading: false });
      });
  };

  render() {
    const { isShowing, modalDetails, openModal, closeModal } = this.props;
    return (
      <div>
        <Modal
          className="modal"
          show={isShowing}
          close={closeModal}
          details={modalDetails}
          shouldCloseOnOverlayClick
        />
        <SearchForm onSearchSubmit={this.handleSearchSubmit} />
        <div
          ref={this.searchRef}
          id="searchWrapper"
          className={this.state.showResults ? 'show' : ''}
        >
          <SearchResults
            loading={this.state.loading}
            businesses={this.state.businesses}
            noData={this.state.noData}
            onOpenModal={openModal}
            id="results"
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  modalDetails: PropTypes.object,
  isShowing: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

export default Home;
