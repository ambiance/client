import React from 'react';
import PropTypes from 'prop-types';

class AuraButtons extends React.Component {
  static propTypes = {
    handleAuraVote: PropTypes.func.isRequired,
    aura: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  };

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

export default AuraButtons;
