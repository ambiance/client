import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { user, handleLogin } = this.props;

    console.log(this.props);

    return (
      // TODO: Create some type of alert to let them know they are not authenticated.
      <main style={{ display: 'flex' }}>
        <SignupForm />
        <LoginForm handleLogin={handleLogin} />
      </main>
    );
  }
}

export default LoginPage;
