import React from 'react';
import PropTypes from 'prop-types';
import DashboardMenu from './DashboardMenu';
import AccountSettings from './AccountSettings';
import Favorites from './Favorites';

class Dashboard extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    modalDetails: PropTypes.object,
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

  goToSettings = () => {
    this.setState({ active: 'settings' });
  };

  render() {
    const { user, modalDetails, isModalShowing, openModal, closeModal, logout } = this.props;

    return (
      <div className="dashboard">
        <DashboardMenu
          user={user}
          activeView={this.state.active}
          showOverview={this.goToOverview}
          showSettings={this.goToSettings}
          logout={logout}
        />
        {this.state.active === 'overview' ? (
          <div className="dashboard-body">
            <h1 className="dashboard-header">Welcome, {user.username ? user.username : 'Anon'}!</h1>
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
        {this.state.active === 'settings' ? (
          <div className="dashboard-body">
            <h1 className="dashboard-header">Account Settings</h1>
            <AccountSettings user={user} />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Dashboard;
