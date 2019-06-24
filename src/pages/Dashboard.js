import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import DashboardMenu from '../components/DashboardMenu';
import AccountSettings from '../components/AccountSettings';
import '../styles/Dashboard.scss';

class Dashboard extends React.Component {
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
    const {
      user,
      logout,
      location: { pathname: pathName },
    } = this.props;

    return (
      <main className="dashboard">
        <Head pathName={pathName} title="Dashboard | Aura" />
        <DashboardMenu
          user={user}
          activeView={this.state.active}
          showOverview={this.goToOverview}
          showSettings={this.goToSettings}
          logout={logout}
        />
        {this.state.active === 'overview' ? (
          <div className="dashboardBody">
            <h1 className="dashboardHeader">Welcome, {user.username ? user.username : 'Anon'}!</h1>
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
          <div className="dashboardBody">
            <h1 className="dashboardHeader">Account Settings</h1>
            <AccountSettings user={user} />
          </div>
        ) : (
          ''
        )}
      </main>
    );
  }
}

Dashboard.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  user: PropTypes.object.isRequired,
  logout: PropTypes.func,
  // modalDetails: PropTypes.object,
  // isModalShowing: PropTypes.bool,
  // openModal: PropTypes.func,
  // closeModal: PropTypes.func,
};

export default Dashboard;
