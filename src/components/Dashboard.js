import React from 'react';
import PropTypes from 'prop-types';
import AccountForm from './AccountForm';
import Favorites from './Favorites';

class Dashboard extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    modalDetails: PropTypes.string,
    isModalShowing: PropTypes.bool,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      active: 'main',
    };
  }

  render() {
    const { user, modalDetails, isModalShowing, openModal, closeModal } = this.props;

    return (
      <div>
        <div className="user-name">
          <ul>
            <li>Overview</li>
            <li>Account Settings</li>
            <li>Logout</li>
          </ul>
        </div>
        {this.state.active === 'main' ? (
          <div className="dashboard-body">
            <h1>Welcome, {user.username ? user.username : 'Anon'}</h1>
            <AccountForm />
          </div>
        ) : (
          ''
        )}

        {this.state.active === 'favorites' ? (
          <Favorites
            modalDetails={modalDetails}
            isShowing={isModalShowing}
            openModal={openModal}
            closeModal={closeModal}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Dashboard;
