import React from 'react';
import PropTypes from 'prop-types';

class VotingButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonName: '',
      selected: false,
    };
  }

  /**
   * Event handler - handles toggling the vote button when pushed.
   * @param {Event} event Submit event
   */
  handleVote = event => {
    event.preventDefault();
    if (!this.state.selected) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
    this.props.handleVote({
      buttonName: this.state.buttonName,
      selected: this.state.selected,
    });
  };

  render() {
    const { buttonName, selected } = this.props;
    /*
     * TODO: Changed this back to how it was originally written due
     * to outside complications but we shouldn't assign state directly here
     * Need to use this.setState() instead
     */
    this.state.buttonName = buttonName;
    this.state.selected = selected;
    // const showBackground = this.state.vote;
    // consts here
    return (
      <div
        className="feedbackSection"
        style={{ backgroundColor: `var(--${buttonName || 'mint'})` }}
      >
        <button
          className="feedbackTabAura"
          style={{
            backgroundColor: this.state.selected ? 'rgba(197, 197, 197, 0)' : 'rgba(197, 197, 197)',
          }}
          onClick={this.handleVote}
        >
          {buttonName}
        </button>
      </div>
    );
  }
}

VotingButtons.propTypes = {
  handleVote: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default VotingButtons;
