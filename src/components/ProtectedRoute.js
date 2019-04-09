import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

/**
 * Higher Order Component that wraps the Router component to obfuscate authentication in routes.
 * @param {*} param0 Destructured Props Variables
 */
const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object, // FIXME: Check out how to get this to not yell with .isRequired
};

export default ProtectedRoute;
