import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CredentialForm.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginUsernameInputValue: '',
      loginPasswordInputValue: '',
    };
  }

  /**
   * Text-based input change handler.
   *
   * `NOTE:` Requires some alteration for radio buttons and drop down selects.
   * @param {Event} event Input change event
   */
  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  /**
   * Login event handler
   * @param {Event} event Submit event
   */
  handleLogin = event => {
    event.preventDefault();
    this.props.handleLogin({
      username: this.state.loginUsernameInputValue,
      password: this.state.loginPasswordInputValue,
    });
  };

  /**
   * Event handler - Toggles app's active form between 'Login' and 'Signup'
   * @param {Event} event Submit event
   */
  handleSwitchToSignup = event => {
    event.preventDefault();
    this.props.handleSwitch();
  };

  render() {
    return (
      <form onSubmit={this.handleLogin} className="credentialForm">
        <h1 className="credentialTitle">Welcome back!</h1>
        <p className="credentialDescription">
          Don't have an account?{' '}
          <button type="button" className="nipsey" onClick={this.handleSwitchToSignup}>
            Sign up here!
          </button>
        </p>
        <label className="" htmlFor="loginUsernameInputValue">
          <input
            className="credentialInput"
            type="text"
            id="loginUsernameInputValue"
            autoComplete="username"
            name="loginUsernameInputValue"
            placeholder="Enter username"
            value={this.state.loginUsernameInputValue}
            onChange={this.handleInputChange}
          />
        </label>

        <label htmlFor="loginPasswordInputValue">
          <input
            className="credentialInput"
            type="password"
            placeholder="Enter password"
            id="loginPasswordInputValue"
            autoComplete="current-password"
            name="loginPasswordInputValue"
            value={this.state.loginPasswordInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <button className="submitButton" type="submit">
          Login
        </button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func.isRequired,
};

export default LoginForm;
