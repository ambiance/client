import React from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import API from '../utils/API';

class AccountForm extends React.Component {
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

  handleSubmit = async event => {
    event.preventDefault();
    const { nameInputValue, passwordInputValue, newPasswordInputValue, confirmPasswordInputValue } = this.state;
    const { user } = this.props;
    if (newPasswordInputValue !== confirmPasswordInputValue) {
      Swal.fire({
        type: 'error',
        text: 'New passwords must match',
        showConfirmButton: false,
        timer: 1200,
      });
      return;
    }

    // TODO: Handle password change
    if (newPasswordInputValue) {
      if (!passwordInputValue) {
        Swal.fire({
          type: 'error',
          text: 'Please input old password',
          showConfirmButton: false,
          timer: 1200,
        });
        return;
      }

      const data = {
        username: `${user.username}`,
        password: `${passwordInputValue}`,
        newPassword: `${newPasswordInputValue}`,
      };
      const response = await API.post(`account/change-password`, data);
      if (response.status === 200) {
        Swal.fire({
          type: 'success',
          text: 'Password successfully changed',
          showConfirmButton: false,
          timer: 1200,
        });
      } else {
        Swal.fire({
          type: 'error',
          text: 'Sorry, something went wrong...',
        });
      }
    }
    // TODO: Handle name change
    if (nameInputValue) {
      const data = {
        username: `${user.username}`,
        displayName: `${nameInputValue}`,
      };
      const response = await API.post(`account/change-display-name`, data);
      if (response.status === 200) {
        Swal.fire({
          type: 'success',
          text: 'Name successfully changed',
          showConfirmButton: false,
          timer: 1200,
        });
      } else {
        Swal.fire({
          type: 'error',
          text: 'Name was not changed',
        });
      }
    }
  };

  render() {
    return (
      <div className="account-form">
        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="nameInputValue">
            Display name:
            <input
              type="text"
              id="nameInputValue"
              name="nameInputValue"
              value={this.state.nameInputValue}
              onChange={this.handleInputChange}
            />
          </label>

          <div>
            <label htmlFor="newPasswordInputValue">
              New password:
              <input
                type="password"
                id="newPasswordInputValue"
                name="newPasswordInputValue"
                minLength="8"
                value={this.state.newPasswordInputValue}
                onChange={this.handleInputChange}
              />
            </label>

            <label htmlFor="confirmPasswordInputValue">
              Confirm new password:
              <input
                type="password"
                id="confirmPasswordInputValue"
                name="confirmPasswordInputValue"
                minLength="8"
                value={this.state.confirmPasswordInputValue}
                onChange={this.handleInputChange}
              />
            </label>
            <label htmlFor="passwordInputValue">
              Old password:
              <input
                type="password"
                id="passwordInputValue"
                name="passwordInputValue"
                minLength="8"
                value={this.state.passwordInputValue}
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AccountForm;
