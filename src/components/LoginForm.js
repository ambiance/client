import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      usernameInputValue: '',
      passwordInputValue: '',
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
      username: this.state.usernameInputValue,
      password: this.state.passwordInputValue,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Login</h1>
        <label htmlFor="usernameInputValue">
          Username:
          <input
            type="text"
            id="usernameInputValue"
            name="usernameInputValue"
            placeholder="username"
            value={this.state.usernameInputValue}
            onChange={this.handleInputChange}
          />
        </label>

        <label htmlFor="passwordInputValue">
          Password:
          <input
            type="text"
            placeholder="password"
            id="passwordInputValue"
            name="passwordInputValue"
            value={this.state.passwordInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        {/* Need a button to acheive submit functionality, but don't use the button */}
        <button type="submit" style={{ display: 'none' }} />
      </form>
    );
  }
}

export default LoginForm;
