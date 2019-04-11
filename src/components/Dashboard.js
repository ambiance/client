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
    logout: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      active: 'overview',
    };
  }

  goToOverview = () => {
    this.setState({ active: 'overview' });
  };

  goToAccountSettings = () => {
    this.setState({ active: 'account' });
  };

  render() {
    const { user, modalDetails, isModalShowing, openModal, closeModal, logout } = this.props;

    return (
      <div className="dashboard">
        <div className="account-menu">
          <ul>
            <li>
              {this.state.active === 'overview' ? (
                'Overview'
              ) : (
                <a href="#" onClick={() => this.goToOverview()}>
                  Overview
                </a>
              )}
            </li>
            <li>
              {this.state.active === 'account' ? (
                'Account Settings'
              ) : (
                <a href="#" onClick={() => this.goToAccountSettings()}>
                  Account Settings
                </a>
              )}
            </li>
            <li onClick={() => logout()}>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
        {this.state.active === 'overview' ? (
          <div className="dashboard-body">
            <h1>Welcome, {user.username ? user.username : 'Anon'}</h1>
            <Favorites
              modalDetails={modalDetails}
              isShowing={isModalShowing}
              openModal={openModal}
              closeModal={closeModal}
            />
          </div>
        ) : (
          ''
        )}
        {this.state.active === 'account' ? (
          <div className="dashboard-body">
            <AccountForm user={user} />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Dashboard;
