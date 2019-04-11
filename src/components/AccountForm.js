import React from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import API from '../utils/API';

class AccountForm extends React.Component {
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
    if (newPasswordInputValue !== confirmPasswordInputValue) {
      Swal.fire({
        type: 'error',
        text: 'New passwords must match...',
        showConfirmButton: false,
        timer: 1200,
      });
      return;
    }

    // TODO: Handle password change
    if (newPasswordInputValue) {
      const data = {
        password: `${passwordInputValue}`,
        newPassword: `${newPasswordInputValue}`,
      };
      const response = await API.post(`account/change-password`, data);
      Swal.fire({
        type: 'success',
        text: 'Password successfully changed',
      });
    }
    // TODO: Handle name change
    if (nameInputValue) {
      Swal.fire({
        type: 'success',
        text: 'Name successfully changed',
      });
    }
  };

  render() {
    return (
      <div>
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
                value={this.state.newPasswordInputValue}
                onChange={this.handleInputChange}
              />
            </label>

            <label htmlFor="confirmPasswordInputValue">
              Re-enter password:
              <input
                type="password"
                id="confirmPasswordInputValue"
                name="confirmPasswordInputValue"
                value={this.state.confirmPasswordInputValue}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <label htmlFor="passwordInputValue">
            Old password:
            <input
              type="password"
              id="passwordInputValue"
              name="passwordInputValue"
              value={this.state.passwordInputValue}
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

export default AccountForm;
