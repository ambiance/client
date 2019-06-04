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

    this.loadMoreRef = React.createRef();
    this.loadingDotsRef = React.createRef();
    this.searchRef = React.createRef();

    this.state = {
      // modalDetails: '',
      businesses: [],
      loading: false,
      noData: false,
      showResults: false,
      params: { results: 0, page: 0 },
      hasMoreResults: false,
      scrollTo: 0,
    };
  }

  calculateResultsPerChunk = () => {
    const cardsPerRow = Math.floor(window.innerWidth / 400);
    if (cardsPerRow === 2) return 8;
    if (cardsPerRow > 2) return cardsPerRow * 2;
    return 6;
  };

  handleSearchSubmit = searchFormData => {
    // Warn the user that there is already a request being made
    if (this.state.loading) {
      // TODO: Talk to the team about what we want to do when many requests are being made.
    }

    // Dynamically add search parameters based on the results from the search form.
    const params = {};
    if (!searchFormData.auraValue) {
      params.aura = searchFormData.auraValue;
    }
    if (!searchFormData.categoryValue) {
      params.category = searchFormData.categoryValue;
    }
    if (!searchFormData.cityValue) {
      params.city = searchFormData.cityValue;
    }
    const resultsPerChunk = this.calculateResultsPerChunk();

    this.setState(
      {
        showResults: true,
        businesses: [],
        loading: true,
        params: {
          ...params,
          page: 0,
          results: resultsPerChunk,
        },
        hasMoreResults: false,
      },
      () => {
        window.scroll({
          top: this.searchRef.current.offsetTop - 50,
          left: 0,
          passive: true,
        });
        this.queryDatabase(this.state.params);
      }
    );
  };

  queryDatabase = params => {
    // Make a request to the Aura Server for business information.
    API.get('businesses', { params })
      .then(response => {
        const { businesses, hasMoreResults } = response.data;
        this.setState(prevState => ({
          businesses: prevState.businesses.concat(businesses),
          loading: false,
          hasMoreResults,
        }));
        if (response.data.businesses.length === 0) {
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

  handleLoadMore = () => {
    this.setState(
      prevState => ({
        params: { ...prevState.params, page: prevState.params.page + 1 },
      }),
      () => {
        const scrollTo = this.loadMoreRef.current.offsetTop - 70;
        this.setState({ scrollTo });
        this.queryDatabase(this.state.params);
        this.toggleLoadingDots();
      }
    );
  };

  toggleLoadingDots = () => {
    if (this.loadMoreRef.current) {
      this.loadMoreRef.current.classList.toggle('hidden');
    }
    if (this.loadingDotsRef.current) {
      this.loadingDotsRef.current.classList.toggle('hidden');
    }
  };

  render() {
    const {
      location: { pathname: pathName },
      isShowing,
      modalDetails,
      voteDetails,
      openModal,
      closeModal,
      handleAuraVote,
      likeBusiness,
      likedBusinesses,
      isAuthenticated,
    } = this.props;

    return (
      <main>
        <Head pathName={pathName} title="Home | Aura" />
        <Modal
          className="modal"
          show={isShowing}
          close={closeModal}
          details={modalDetails}
          voteDetails={voteDetails}
          handleAuraVote={handleAuraVote}
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
            handleLoadMore={this.handleLoadMore}
            showLoadMoreBtn={this.state.hasMoreResults}
            loadMoreRef={this.loadMoreRef}
            loadingDotsRef={this.loadingDotsRef}
            toggleLoadingDots={this.toggleLoadingDots}
            scrollTo={this.state.scrollTo}
            id="results"
            likeBusiness={likeBusiness}
            likedBusinesses={likedBusinesses}
            isAuthenticated={isAuthenticated}
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
  voteDetails: PropTypes.array,
  isShowing: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  handleAuraVote: PropTypes.func,
  likeBusiness: PropTypes.func,
  likedBusinesses: PropTypes.array,
  isAuthenticated: PropTypes.bool,
};

export default Home;
