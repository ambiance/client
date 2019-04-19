import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import '../css/loginForm.css';

class SignupForm extends Component {
  static propTypes = {
    handleSignup: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      usernameInputValue: '',
      passwordInputValue: '',
      passwordConfirmInputValue: '',
    };
  }

  handleInputChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { passwordInputValue, passwordConfirmInputValue } = this.state;
    // FIXME: Create a validation middleware we can use instead of these checks here.
    if (passwordInputValue !== passwordConfirmInputValue) {
      Swal.fire({
        type: 'error',
        text: 'New passwords must match',
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      this.props.handleSignup({
        username: this.state.usernameInputValue,
        password: this.state.passwordInputValue,
      });
    }
  };

  render() {
    return (
      <form
        className="signupForm"
        onSubmit={this.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <h1 className="loginTitle">Signup</h1>
        <label htmlFor="usernameInputValue">
          Username:
          <input
            type="text"
            placeholder="username"
            id="usernameInputValue"
            name="usernameInputValue"
            value={this.state.usernameInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="passwordInputValue">
          Password:
          <input
            type="password"
            placeholder="password"
            id="passwordInputValue"
            name="passwordInputValue"
            minLength="8"
            value={this.state.passwordInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="passwordConfirmInputValue">
          Confirm Password:
          <input
            type="password"
            placeholder="password"
            id="passwordConfirmInputValue"
            name="passwordConfirmInputValue"
            minLength="8"
            value={this.state.passwordConfirmInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        {/* Need a button to acheive submit functionality, but don't use the button */}
        <button className="submitButton" type="submit">
          Sign up!
        </button>
      </form>
    );
  }
}

export default SignupForm;
