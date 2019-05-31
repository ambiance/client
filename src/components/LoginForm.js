import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CredentialForm.scss';

class LoginForm extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleSwitch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      loginUsernameInputValue: '',
      loginPasswordInputValue: '',
    };
  }

  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.handleLogin({
      username: this.state.loginUsernameInputValue,
      password: this.state.loginPasswordInputValue,
    });
  };

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

export default LoginForm;
