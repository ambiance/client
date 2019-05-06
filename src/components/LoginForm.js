import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/CredentialForm.scss';

class LoginForm extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
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

  render() {
    return (
      <form className="credentialForm" onSubmit={this.handleLogin}>
        <h1 className="credentialTitle">Login</h1>
        <label className="" htmlFor="loginUsernameInputValue">
          Username:
          <input
            className="credentialInput"
            type="text"
            id="loginUsernameInputValue"
            autoComplete="username"
            name="loginUsernameInputValue"
            placeholder="username"
            value={this.state.loginUsernameInputValue}
            onChange={this.handleInputChange}
          />
        </label>

        <label htmlFor="loginPasswordInputValue">
          Password:
          <input
            className="credentialInput"
            type="password"
            placeholder="password"
            id="loginPasswordInputValue"
            autoComplete="current-password"
            name="loginPasswordInputValue"
            value={this.state.loginPasswordInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
