import React from 'react';
import PropTypes from 'prop-types';

const DashboardMenu = ({ user, activeView, showOverview, showSettings, logout }) => (
  <div className="account-menu">
    <h1 className="dashboard-header">{user.username || 'User'}</h1>
    <ul>
      <li>
        {activeView === 'overview' ? (
          <span className="active-view">Overview</span>
        ) : (
          <button type="button" className="link-button" onClick={() => showOverview()}>
            Overview
          </button>
        )}
      </li>
      <li>
        {activeView === 'settings' ? (
          <span className="active-view">Account Settings</span>
        ) : (
          <button type="button" className="link-button" onClick={() => showSettings()}>
            Account Settings
          </button>
        )}
      </li>
      <li>
        <button type="button" className="link-button" onClick={() => logout()}>
          Logout
        </button>
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
