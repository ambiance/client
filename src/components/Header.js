import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Global navigation header
 * @param {Object} props Passed props
 * @param {string} props.auraLogo Logo URL
 * @param {boolean} props.isAuthenticated Authenticated flag
 */
const Header = ({ auraLogo, isAuthenticated }) => (
  <header>
    <NavLink id="logo" to="/">
      <div>
        <img src={auraLogo} alt="auraLogo" />
      </div>
    </NavLink>

    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About Aura
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        {isAuthenticated ? (
          <React.Fragment>
            <li>
              <NavLink activeClassName="active" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          </React.Fragment>
        ) : (
          <li>
            <NavLink activeClassName="active" to="/login">
              Sign In
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  auraLogo: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
