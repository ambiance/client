import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import BusinessCard from './BusinessCard';
import '../styles/SearchResults.scss';

class SearchResults extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.loading !== this.props.loading ||
      this.props.businesses.length !== prevProps.businesses.length
    ) {
      this.props.toggleLoadingDots();
      if (prevProps.businesses.length !== 0) {
        window.scroll({
          left: 0,
          top: this.props.scrollTo,
          behavior: 'smooth',
        });
      }
    }
  }
  render() {
    const {
      businesses,
      loading,
      noData,
      onOpenModal,
      showLoadMoreBtn,
      handleLoadMore,
      loadMoreRef,
      loadingDotsRef,
      likeBusiness,
      user,
      isAuthenticated,
    } = this.props;

    if (loading) {
      return (
        <div className="loaderWrapper">
          <Loader type="Triangle" color="#5abb9e" height="30vh" width="100%" />
        </div>
      );
    }
    if (noData) {
      return (
        <div>
          <section className="errorpage">No Results found try using a different Aura.</section>
        </div>
      );
    }
    if (businesses.length === 0) {
      if (noData) {
        return (
          <div>
            <h2 className="errorTitle">
              Sorry but our database does not have the information you are looking for, please
              search again using different filters.
            </h2>
          </div>
        );
      }
      return <div />;
    }
    return (
      <section id="searchResults">
        <div className="resultCards">
          {businesses.map((business, i) => (
            <div key={i}>
              <BusinessCard
                key={i}
                business={business}
                handleOpen={onOpenModal}
                likeBusiness={likeBusiness}
                user={user}
                isAuthenticated={isAuthenticated}
              />
            </div>
          ))}
        </div>
        {showLoadMoreBtn ? (
          <div>
            <button
              onClick={handleLoadMore}
              type="button"
              className="loadMore hidden"
              ref={loadMoreRef}
            >
              Load more
            </button>
            <div ref={loadingDotsRef} className="dotLoader">
              <Loader type="ThreeDots" color="black" height={100} width={100} />
            </div>
          </div>
        ) : (
          ''
        )}
      </section>
    );
  }
}

SearchResults.propTypes = {
  businesses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  noData: PropTypes.bool.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
  showLoadMoreBtn: PropTypes.bool.isRequired,
  toggleLoadingDots: PropTypes.func.isRequired,
  scrollTo: PropTypes.number.isRequired,
  loadMoreRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  loadingDotsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  likeBusiness: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default SearchResults;
