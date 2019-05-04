import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import '../styles/LoginForm.scss';

class SignupForm extends Component {
  static propTypes = {
    handleSignup: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      signupUsernameInputValue: '',
      signupPasswordInputValue: '',
      signupPasswordConfirmInputValue: '',
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
    const { signupPasswordInputValue, signupPasswordConfirmInputValue } = this.state;
    // FIXME: Create a validation middleware we can use instead of these checks here.
    if (signupPasswordInputValue !== signupPasswordConfirmInputValue) {
      Swal.fire({
        type: 'error',
        text: 'New passwords must match',
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      this.props.handleSignup({
        username: this.state.signupUsernameInputValue,
        password: this.state.signupPasswordInputValue,
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
        <label htmlFor="signupUsernameInputValue">
          Username:
          <input
            type="text"
            placeholder="username"
            id="signupUsernameInputValue"
            name="signupUsernameInputValue"
            autoComplete="username"
            value={this.state.signupUsernameInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="signupPasswordInputValue">
          Password:
          <input
            type="password"
            placeholder="password"
            id="signupPasswordInputValue"
            name="signupPasswordInputValue"
            autoComplete="new-password"
            minLength="8"
            value={this.state.signupPasswordInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="signupPasswordConfirmInputValue">
          Confirm Password:
          <input
            type="password"
            placeholder="password"
            id="signupPasswordConfirmInputValue"
            name="signupPasswordConfirmInputValue"
            autoComplete="new-password"
            minLength="8"
            value={this.state.signupPasswordConfirmInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <button className="submitButton" type="submit">
          Sign up!
        </button>
      </form>
    );
  }
}

export default SignupForm;
