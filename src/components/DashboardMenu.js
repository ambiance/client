import React from 'react';
import PropTypes from 'prop-types';

const DashboardMenu = ({ user, activeView, showOverview, showSettings, logout }) => (
  <div className="accountMenu">
    <h1 className="dashboardHeader">{user.username || 'User'}</h1>
    <ul>
      <li>
        {activeView === 'overview' ? (
          <span className="activeView">Overview</span>
        ) : (
          <button type="button" className="linkButton" onClick={() => showOverview()}>
            Overview
          </button>
        )}
      </li>
      <li>
        {activeView === 'settings' ? (
          <span className="activeView">Account Settings</span>
        ) : (
          <button type="button" className="linkButton" onClick={() => showSettings()}>
            Account Settings
          </button>
        )}
      </li>
      <li>
        <button type="button" className="linkButton" onClick={() => logout()}>
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
