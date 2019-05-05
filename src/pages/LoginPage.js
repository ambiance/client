import React from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import '../styles/LoginPage.scss';

import API, { alertErrorHandler } from '../services/API';

class LoginPage extends React.Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  };

  constructor(props) {
    super(props);

    this.state = {};
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

  handleLogin = credentials => {
    // Make axios call to server to authenticate.
    API.post('auth/login/', {
      username: credentials.username,
      password: credentials.password,
    })
      .then(response => {
        // Set response jwt to all further requests.
        API.defaults.headers.common.Authorization = response.data.token;

        // Set token to local storage.
        localStorage.setItem('auraUserToken', response.data.token);

        // set user and authentication in state.
        this.props.handleLogin(response.data.user);

        // redirect User to their dashboard / home page.
        this.props.history.push('/dashboard');
      })
      .catch(err => alertErrorHandler(err));
  };

  render() {
    return (
      <main className="loginPage">
        <SignupForm handleSignup={this.handleSignup} />
        <LoginForm handleLogin={this.handleLogin} />
      </main>
    );
  }
}

// Just in case we are not using it with React Router and we still want to push the history state.
export default withRouter(LoginPage);
