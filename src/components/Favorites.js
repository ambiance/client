import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
import Modal from './Modal';

const Favorites = ({ favorites, isShowing, closeModal, openModal, modalDetails }) => (
  <div>
    <h2>Favorites</h2>
    <Modal className="modal" show={isShowing} close={closeModal} details={modalDetails} />
    <div className="resultCards">
      {favorites ? (
        favorites.map((favorite, i) => (
          <div>
            <CardItem key={i} business={favorite} onOpenModal={openModal} />
          </div>
        ))
      ) : (
        <p>You do not have any favorites</p>
      )}
    </div>
  </div>
);

Favorites.propTypes = {
  favorites: PropTypes.array,
  isShowing: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalDetails: PropTypes.string.isRequired,
};

export default Favorites;
