import React from 'react';
import PropTypes from 'prop-types';

// Components
import Head from './Head';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import Modal from '../components/Modal';

import API, { alertErrorHandler } from '../services/API';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.searchRef = React.createRef();
    const cardsPerRow = Math.floor(window.innerWidth / 400);
    let resultsPerPage = 6;
    if (cardsPerRow === 2) resultsPerPage = 8;
    if (cardsPerRow > 2) resultsPerPage = cardsPerRow * 2;

    this.state = {
      // modalDetails: '',
      businesses: [],
      loading: false,
      noData: false,
      showResults: false,
      page: 0,
    };
  }

  handleSearchSubmit = searchFormData => {
    // Warn the user that there is already a request being made
    if (this.state.loading) {
      // TODO: Talk to the team about what we want to do when many requests are being made.
    }

    // Start the loader to ease waiting time.
    this.setState({ showResults: true, loading: true, page: 0 }, () => {
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
    params.page = this.state.page;
    params.resultsPerPage = this.state.resultsPerPage;

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
      .catch(err => {
        alertErrorHandler(err);
        this.setState({ showResults: false, loading: false });
      });
  };

  handleLoadMore() {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  render() {
    console.log(this.props);
    const {
      location: { pathname: pathName },
      isShowing,
      modalDetails,
      openModal,
      closeModal,
    } = this.props;
    return (
      <main>
        <Head pathName={pathName} title="Home | Aura" />
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
            loadMore={this.handleLoadMore}
            id="results"
          />
        </div>
      </main>
    );
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  modalDetails: PropTypes.object,
  isShowing: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
};

export default Home;
