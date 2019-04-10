import React from 'react';
import PropTypes from 'prop-types';

class AccountForm extends React.Component {
  static propTypes = {};

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

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="nameInputValue">
            <input
              type="text"
              id="nameInputValue"
              name="nameInputValue"
              value={this.state.nameInputValue}
              onChange={this.handleInputChange}
            />
            Display name:
          </label>

          <label htmlFor="passwordInputValue">
            <input
              type="password"
              id="passwordInputValue"
              name="passwordInputValue"
              value={this.state.passwordInputValue}
              onChange={this.handleInputChange}
              required
            />
            Old password:
          </label>

          <label htmlFor="newPasswordInputValue">
            <input
              type="password"
              id="newPasswordInputValue"
              name="newPasswordInputValue"
              value={this.state.newPasswordInputValue}
              onChange={this.handleInputChange}
            />
            New password:
          </label>

          <label htmlFor="confirmPasswordInputValue">
            <input
              type="password"
              id="confirmPasswordInputValue"
              name="confirmPasswordInputValue"
              value={this.state.confirmPasswordInputValue}
              onChange={this.handleInputChange}
            />
            Re-enter password:
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AccountForm;
