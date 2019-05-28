import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/**
 * Global navigation header
 * @param {Object} props Props
 * @param {string} props.auraLogo Logo Url
 * @param {boolean} props.isAuthenticated Authenticated Flag
 */
const Header = ({ auraLogo, isAuthenticated }) => (
  <header>
    <NavLink to="/">
      <img src={auraLogo} alt="auraLogo" className="headerLogo" />
    </NavLink>

    <nav>
      <ul>
        <li className="liActive">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About Aura</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {isAuthenticated ? (
          <React.Fragment>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </React.Fragment>
        ) : (
          <li>
            <NavLink to="/login">Sign In</NavLink>
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
