import React from 'react';
import PropTypes from 'prop-types';

class AuraButtons extends React.Component {
  /**
   * Event handler for voting for an aura
   * @param {Event} event Submit event
   */
  handleAuraVote = event => {
    event.preventDefault();
    const { selected } = this.props;
    if (selected) {
      this.props.handleAuraVote({
        aura: this.props.aura,
        selected: false,
      });
    } else {
      this.props.handleAuraVote({
        aura: this.props.aura,
        selected: true,
      });
    }
  };

  render() {
    const { aura, selected } = this.props;
    return (
      <div className="feedbackSection" style={{ backgroundColor: `var(--${aura || 'mint'})` }}>
        <button
          className="feedbackTabAura"
          style={{
            backgroundColor: selected ? 'rgba(197, 197, 197, 0)' : 'rgba(197, 197, 197)',
          }}
          onClick={this.handleAuraVote}
        >
          {aura}
        </button>
      </div>
    );
  }
}

AuraButtons.propTypes = {
  handleAuraVote: PropTypes.func.isRequired,
  aura: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default AuraButtons;
