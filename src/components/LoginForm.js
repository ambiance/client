import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/loginForm.css';

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
      <form
        className="loginForm"
        onSubmit={this.handleLogin}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <h1 className="loginTitle">Login</h1>
        <label htmlFor="loginUsernameInputValue">
          Username:
          <input
            className="usernameSignin"
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
            className="passwordSignin"
            type="password"
            placeholder="password"
            id="loginPasswordInputValue"
            autoComplete="current-password"
            name="loginPasswordInputValue"
            value={this.state.loginPasswordInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        {/* Need a button to acheive submit functionality, but don't use the button */}
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
