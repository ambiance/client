/* eslint-disable react/no-unescaped-entities */
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

    this.state = {
      // modalDetails: '',
      businesses: [],
      loading: false,
      noData: false,
    };
  }

  handleSearchSubmit = searchFormData => {
    this.setState({ loading: true }, () => {
      window.scroll({
        top: 635,
        left: 0,
        behavior: 'smooth',
        passive: true,
      });
    });

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

    API.get('businesses', {
      params,
      // params: {
      //   aura: searchFormData.auraValue,
      //   category: searchFormData.categoryValue,
      //   city: searchFormData.cityValue
      // }
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
      .catch(err => alertErrorHandler(err));
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

        <SearchResults
          loading={this.state.loading}
          businesses={this.state.businesses}
          noData={this.state.noData}
          onOpenModal={openModal}
          id="results"
        />
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
