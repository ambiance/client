import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

/**
 * Higher Order Component that wraps the Router component to obfuscate authentication in routes.
 * @param {Object} props Props Variables
 * @param {Symbol} props.component Rendered component
 * @param {bool} props.isFirstComponent Authenticated flag
 */
const ConditionalRoute = ({ isFirstComponent}) => (
  <Route
    isFirstComponent ? (
      path="/login"
      render={props => (
        <Login
          {...props}
          handleLogin={this.handleLogin}
          handleSwitch={this.handleSwitchToSignup}
        />
      )}
    ) : (
      path="/login"
      render={props => (
        <Login
          {...props}
          handleLogin={this.handleLogin}
          handleSwitch={this.handleSwitchToSignup}
        />
      )}
    )
    // {...rest}
    // render={props =>
    //   isFirstComponent ? (
    //     <Redirect to={{ pathname: '/joinaura', state: { from: props.location } }} />
    //   ) : (
    //     <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    //   )
    // }
  />
);

ConditionalRoute.propTypes = {
  component1: PropTypes.func.isRequired,
  component2: PropTypes.func.isRequired,
  path1: PropTypes.func.isRequired,
  path2: PropTypes.func.isRequired,
  isFirstComponent: PropTypes.bool.isRequired,
  location: PropTypes.object, // FIXME: Check out how to get this to not yell with .isRequired
};

export default ConditionalRoute;

{
  /* <Route
    {...rest}
    render={props =>
      isFirstComponent ? (
        <Component1 {...props} {...rest}  />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  /> */
}
