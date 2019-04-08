import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

import API, { alertErrorHandler } from '../utils/API';

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
        // FIXME: Successful signup workflow??
        this.handleLogin(credentials);
        alert('Successful Signup');
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

        // TODO: Set token to local storage.
        localStorage.setItem('auraUserToken', response.data.token);

        // set user and authentication in state.
        // FIXME: Figure out what you need from the backend
        this.props.handleLogin({ username: credentials.username });

        // redirect User to their dashboard / home page.
        this.props.history.push('/dashboard');
      })
      .catch(err => alertErrorHandler(err));
  };

  render() {
    return (
      // TODO: Create some type of alert to let them know they are not authenticated.
      <main style={{ display: 'flex' }}>
        <SignupForm handleSignup={this.handleSignup} />
        <LoginForm handleLogin={this.handleLogin} />
      </main>
    );
  }
}

// Just in case we are not using it with React Router and we still want to push the history state.
export default withRouter(LoginPage);
