import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import '../styles/CredentialForm.scss';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signupUsernameInputValue: '',
      signupPasswordInputValue: '',
      signupPasswordConfirmInputValue: '',
      signupEmailInputValue: '',
      signupClosestLocationInputValue: '',
    };
  }

  /**
   * Handle form input changes
   * @param {Event} event Submit event
   */
  handleInputChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  };

  /**
   * Handle form input changes
   * @param {Event} event Submit event
   */
  handleSubmit = event => {
    event.preventDefault();
    const {
      signupPasswordInputValue,
      signupPasswordConfirmInputValue,
      signupEmailInputValue,
      signupClosestLocationInputValue,
    } = this.state;
    // Regex
    const re = /\S+@\S+\.\S+/;
    // FIXME: Create a validation middleware we can use instead of these checks here.
    if (re.test(String(signupEmailInputValue).toLowerCase()) !== true) {
      Swal.fire({
        type: 'error',
        text: 'Enter a valid email',
        showConfirmButton: false,
        timer: 1200,
      });
    } else if (signupPasswordInputValue !== signupPasswordConfirmInputValue) {
      Swal.fire({
        type: 'error',
        text: 'New passwords must match',
        showConfirmButton: false,
        timer: 1200,
      });
    } else if (
      signupClosestLocationInputValue === '' ||
      signupClosestLocationInputValue === 'default'
    ) {
      Swal.fire({
        type: 'error',
        text: 'Choose a closest location',
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      this.props.handleSignup({
        username: this.state.signupUsernameInputValue,
        password: this.state.signupPasswordInputValue,
        email: this.state.signupEmailInputValue,
        closestLocation: this.state.signupClosestLocationInputValue,
      });
    }
  };

  handleSwitchToLogin = event => {
    event.preventDefault();
    this.props.handleSwitch();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="credentialForm">
        <h1 className="credentialTitle">Join our Community!</h1>
        <p className="credentialDescription">
          Already have an account?{' '}
          <button type="button" className="nipsey" onClick={this.handleSwitchToLogin}>
            Login here!
          </button>
        </p>
        <label htmlFor="signupUsernameInputValue">
          <input
            className="credentialInput"
            type="text"
            placeholder="Enter Username"
            id="signupUsernameInputValue"
            name="signupUsernameInputValue"
            autoComplete="username"
            value={this.state.signupUsernameInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor="signupEmailInputValue">
          <input
            className="credentialInput"
            type="text"
            placeholder="Enter Email"
            id="signupEmailInputValue"
            name="signupEmailInputValue"
            autoComplete="email"
            minLength="7"
            value={this.state.signupEmailInputValue}
            onChange={this.handleInputChange}
          />
        </label>
        <span className="passwordInputs">
          <label htmlFor="signupPasswordInputValue">
            <input
              className="credentialInput"
              type="password"
              placeholder="Enter Password"
              id="signupPasswordInputValue"
              name="signupPasswordInputValue"
              autoComplete="new-password"
              minLength="8"
              value={this.state.signupPasswordInputValue}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="signupPasswordConfirmInputValue">
            <input
              className="credentialInput"
              type="password"
              placeholder="Confirm Password"
              id="signupPasswordConfirmInputValue"
              name="signupPasswordConfirmInputValue"
              autoComplete="new-password"
              minLength="8"
              value={this.state.signupPasswordConfirmInputValue}
              onChange={this.handleInputChange}
            />
          </label>
        </span>
        <p className="locationWrap">
          <select
            className="locationSelect"
            type="text"
            id="signupClosestLocationInputValue"
            name="signupClosestLocationInputValue"
            value={this.state.signupClosestLocationInputValue}
            onChange={this.handleInputChange}
          >
            <option value="default">Select Your Closest Location</option>
            <option value="santaMonica">Santa Monica</option>
            <option value="downtownLA">Downtown LA</option>
            <option value="culver city">Culver City</option>
            <option value="beverlyHills">Beverly Hills</option>
            <option value="hollywood">Hollywood</option>
            <option value="laBrea">La Brea</option>
            <option value="vanNuys">Van Nuys</option>
            <option value="pasadena">Pasadena</option>
            <option value="newportBeach">Newport Beach</option>
            <option value="anaheim">Anaheim</option>
            <option value="rowlandHeights">Rowland Heights</option>
            <option value="laguna">Laguna</option>
            <option value="brea">Brea</option>
          </select>
        </p>
        <button className="submitButton" type="submit">
          Create my account
        </button>
      </form>
    );
  }
}

SignupForm.propTypes = {
  handleSignup: PropTypes.func.isRequired,
  handleSwitch: PropTypes.func.isRequired,
};

export default SignupForm;
