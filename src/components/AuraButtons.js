import React from 'react';
import PropTypes from 'prop-types';

class AuraButtons extends React.Component {
  static propTypes = {
    handleAuraVote: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      aura: '',
      selected: false,
    };
  }

  handleAuraVote = event => {
    event.preventDefault();
    if (!this.state.selected) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
    this.props.handleAuraVote({
      aura: this.state.aura,
      selected: this.state.selected,
    });
  };

  render() {
    const { aura, selected } = this.props;
    this.setState({ aura, selected });
    // const showBackground = this.state.vote;
    // consts here
    return (
      <div className="feedbackSection" style={{ backgroundColor: `var(--${aura || 'mint'})` }}>
        <button
          className="feedbackTabAura"
          style={{
            backgroundColor: this.state.selected ? 'rgba(197, 197, 197, 0)' : 'rgba(197, 197, 197)',
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
  aura: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default AuraButtons;
