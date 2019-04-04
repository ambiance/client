import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  static propTypes = {};

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

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Login</h1>
        <label>
          Username:
          <input
            type="text"
            placeholder="username"
            name="usernameInputValue"
            value={this.state.usernameInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            placeholder="password"
            name="passwordInputValue"
            value={this.state.passwordInputValue}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

export default LoginForm;
