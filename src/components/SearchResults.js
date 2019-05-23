import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import CardItem from './CardItem';
import '../styles/SearchResults.scss';

class SearchResults extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // this.multiples = Math.floor(window.innerWidth / 400) % 2 ? 6 : 8;

  //   // this.state = {
  //   //   results: [],
  //   //   numVisible: this.multiples,
  //   // };
  // }

  // componentDidMount() {
  //   const { businesses } = this.props;
  //   this.setState({
  //     results: businesses,
  //   });
  // }

  // loadMore() {
  //   // this.setState(prev => ({ numVisible: prev.numVisible + this.multiples }));
  // }

  render() {
    const { businesses, loading, noData, onOpenModal } = this.props;
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
          {this.props.businesses.map((business, i) => (
            <div key={i}>
              <CardItem business={business} onOpenModal={onOpenModal} />
            </div>
          ))}
        </div>
        {
          <button onClick={() => this.props.loadMore()} type="button" className="loadMore">
            Load more
          </button>
        }
      </section>
    );
  }
}

SearchResults.propTypes = {
  businesses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  noData: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default SearchResults;
