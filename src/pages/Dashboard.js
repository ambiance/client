import React from 'react';
import PropTypes from 'prop-types';
import DashboardMenu from '../components/DashboardMenu';
import AccountSettings from '../components/AccountSettings';
import '../styles/Dashboard.scss';

class Dashboard extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func,
    // modalDetails: PropTypes.object,
    // isModalShowing: PropTypes.bool,
    // openModal: PropTypes.func,
    // closeModal: PropTypes.func,
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
    const { user, logout } = this.props;

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
            {/* <Favorites
              modalDetails={modalDetails}
              isShowing={isModalShowing}
              openModal={openModal}
              closeModal={closeModal}
            /> */}
            <h3>You do not have any favorites saved.</h3>
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
