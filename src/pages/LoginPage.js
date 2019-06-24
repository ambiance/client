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
  constructor(props) {
    super(props);

    this.state = {
      showLogin: true,
    };
  }

  /**
   * Signup handler - requests from service to create a new user.
   * @param {Object} credentials Signup credentials
   */
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

  /**
   * Login handler - requests from service to provide an access token for an existing user.
   * @param {Object} credentials Login credentials
   */
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

  /**
   * Toggles the displayed form between signup and login
   */
  toggleForm = () => {
    this.setState(prevState => ({ showLogin: !prevState.showLogin }));
  };

  render() {
    const {
      location: { pathname: pathName },
    } = this.props;
    return (
      <main className="loginPage">
        <Head title="Login | Aura" pathName={pathName} />
        {this.state.showLogin ? (
          <LoginForm handleLogin={this.handleLogin} handleSwitch={this.toggleForm} />
        ) : (
          <SignupForm handleSignup={this.handleSignup} handleSwitch={this.toggleForm} />
        )}
      </main>
    );
  }
}

LoginPage.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

// Just in case we are not using it with React Router and we still want to push the history state.
export default withRouter(LoginPage);
