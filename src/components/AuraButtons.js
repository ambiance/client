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
      vote: false,
    };
  }

  handleAuraVote = event => {
    event.preventDefault();
    this.state.vote = !this.state.vote;
    this.props.handleAuraVote({
      aura: this.state.aura,
      vote: this.state.vote,
    });
    // console.log(this.state.aura);
    // console.log(this.state.vote);
  };

  render() {
    const { aura, backgroundColor } = this.props;
    this.state.aura = aura;
    // consts here
    return (
      <div
        className="feedbackSection"
        style={{ backgroundColor: `var(--${backgroundColor || 'mint'})` }}
      >
        <button className="feedbackTabAura" onClick={this.handleAuraVote}>
          {aura}
        </button>
      </div>
    );
  }
}

AuraButtons.propTypes = {
  aura: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default AuraButtons;
