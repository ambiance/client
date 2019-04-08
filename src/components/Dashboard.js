import React from 'react';
import PropTypes from 'prop-types';

class Dashboard extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { user } = this.props;

    return <h1>Welcome, {user.username ? user.username : 'Anon'}</h1>;
  }
}

export default Dashboard;
