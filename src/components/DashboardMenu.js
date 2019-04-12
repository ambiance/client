import React from 'react';
import PropTypes from 'prop-types';

const DashboardMenu = ({ user, activeView, showOverview, showSettings, logout }) => (
  <div className="account-menu">
    <h1>{user.username || 'User'}</h1>
    <ul>
      <li>
        {activeView === 'overview' ? (
          'Overview'
        ) : (
          <a href="#" onClick={() => showOverview()}>
            Overview
          </a>
        )}
      </li>
      <li>
        {activeView === 'account' ? (
          'Account Settings'
        ) : (
          <a href="#" onClick={() => showSettings()}>
            Account Settings
          </a>
        )}
      </li>
      <li>
        <a href="#" onClick={() => logout()}>
          Logout
        </a>
      </li>
    </ul>
  </div>
);

DashboardMenu.propTypes = {
  user: PropTypes.object.isRequired,
  activeView: PropTypes.string.isRequired,
  showOverview: PropTypes.func.isRequired,
  showSettings: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default DashboardMenu;
