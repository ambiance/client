import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
// components

import Head from './Head';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
// helpers
import API, { alertErrorHandler } from '../services/API';
// scss
import '../styles/LoginPage.scss';

class LoginPage extends React.Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleSwitch: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  };

  constructor(props) {
    super(props);

    this.state = {
      showLogin: true,
    };
  }

  handleSignup = credentials => {
    API.post('auth/signup/', {
      username: credentials.username,
      password: credentials.password,
      email: credentials.email,
      closestLocation: credentials.closestLocation,
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

  handleSwitchToLogin = event => {
    console.log('Switch To Login!');
    this.setState({ showLogin: true });
  };

  handleSwitchToSignup = event => {
    console.log('Switch To Signup!');
    this.setState({ showLogin: false });
  };

  render() {
    const {
      location: { pathname: pathName },
    } = this.props;
    return (
      <main className="loginPage">
        <Head title="Login | Aura" />
        {this.state.showLogin ? (
          <LoginForm handleLogin={this.handleLogin} handleSwitch={this.handleSwitchToSignup} />
        ) : (
          <SignupForm handleSignup={this.handleSignup} handleSwitch={this.handleSwitchToLogin} />
        )}
      </main>
    );
  }
}

// Just in case we are not using it with React Router and we still want to push the history state.
export default withRouter(LoginPage);
