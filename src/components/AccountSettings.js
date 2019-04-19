import React from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import API, { alertErrorHandler } from '../utils/API';

class AccountSettings extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      nameInputValue: '',
      passwordInputValue: '',
      newPasswordInputValue: '',
      confirmPasswordInputValue: '',
    };
  }

  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleNameChangeSubmit = async event => {
    event.preventDefault();
    const { nameInputValue } = this.state;
    const { user } = this.props;

    const data = {
      username: `${user.username}`,
      displayName: `${nameInputValue}`,
    };
    try {
      const response = await API.patch(`account/change-display-name`, data);
      if (response.status === 200) {
        Swal.fire({
          type: 'success',
          text: 'Name successfully changed',
          showConfirmButton: false,
          timer: 1200,
        });
      }
    } catch (err) {
      alertErrorHandler(err);
    }
  };

  handlePasswordChangeSubmit = async event => {
    event.preventDefault();
    const { newPasswordInputValue, confirmPasswordInputValue } = this.state;
    // TODO: const { user } = this.props;
    if (newPasswordInputValue !== confirmPasswordInputValue) {
      Swal.fire({
        type: 'error',
        text: 'New passwords must match',
        showConfirmButton: false,
        timer: 1200,
      });
      return;
    }

    const data = {
      newPassword: `${newPasswordInputValue}`,
    };
    try {
      const response = await API.patch(`account/change-password`, data);
      if (response.status === 200) {
        Swal.fire({
          type: 'success',
          text: 'Password successfully changed',
          showConfirmButton: false,
          timer: 1200,
        });
      }
    } catch (err) {
      alertErrorHandler(err);
    }
  };

  render() {
    return (
      <div className="account-forms">
        {/* <form onSubmit={this.handleNameChangeSubmit}>
          <h3>Update display name</h3>
          <label htmlFor="nameInputValue">
            Display name:
            <input
              type="text"
              id="nameInputValue"
              name="nameInputValue"
              value={this.state.nameInputValue}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form> */}

        <form onSubmit={this.handlePasswordChangeSubmit}>
          <h3>Update password</h3>
          <label htmlFor="passwordInputValue">
            Old password:
            <input
              type="password"
              id="passwordInputValue"
              name="passwordInputValue"
              minLength="8"
              value={this.state.passwordInputValue}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <label htmlFor="newPasswordInputValue">
            New password:
            <input
              type="password"
              id="newPasswordInputValue"
              name="newPasswordInputValue"
              minLength="8"
              value={this.state.newPasswordInputValue}
              onChange={this.handleInputChange}
              required
            />
          </label>

          <label htmlFor="confirmPasswordInputValue">
            Confirm password:
            <input
              type="password"
              id="confirmPasswordInputValue"
              name="confirmPasswordInputValue"
              minLength="8"
              value={this.state.confirmPasswordInputValue}
              onChange={this.handleInputChange}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AccountSettings;
