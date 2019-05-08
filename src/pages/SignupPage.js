import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
// components
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
// helpers
import API, { alertErrorHandler } from '../services/API';
// scss
import '../styles/LoginPage.scss';

class SignupPage extends React.Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleSwitch: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  };

  constructor(props) {
    super(props);

    this.state = {
      signupFlag: false,
    };
  }

  handleSignup = credentials => {
    API.post('auth/signup/', {
      username: credentials.username,
      password: credentials.password,
    })
      .then(response => {
        this.handleLogin(credentials);
        Swal.fire({
          type: 'success',
          text: 'Successful signup',
          showConfirmButton: false,
          timer: 1200,
        });
      })
      .catch(err => alertErrorHandler(err));
  };

  handleSwitch = event => {
    this.props.handleSwitch();
  };

  render() {
    return (
      <main className="signupPage">
        <SignupForm handleSignup={this.handleSignup} handleSwitch={this.handleSwitch} />
      </main>
    );
  }
}

// Just in case we are not using it with React Router and we still want to push the history state.
export default withRouter(SignupPage);
