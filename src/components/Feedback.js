import React from 'react';
import PropTypes from 'prop-types';

// Components
import AuraButtons from './AuraButtons.js';
// helpers
import auraDescriptions from '../data/auraDescriptions';
// scss
import '../styles/Feedback.scss';

export default class Feedback extends React.Component {
  static propTypes = {
    handleAuraVote: PropTypes.func.isRequired,
  };

  handleAuraVote = event => {
    this.props.handleAuraVote({
      aura: event.aura,
      vote: event.selected,
    });
  };

  render() {
    const { voteDetails } = this.props;
    return (
      <div className="modalFeedback">
        {/* Call to action */}
        <p className="feedbackHeader"> Let us know what you think!</p>
        <p className="feedbackHeader">Click an Aura to vote what you think about this place.</p>
        {/* <p>{details.yelpId.type}</p> */}
        {/* Aura pills */}
        <div className="buttonsContainer">
          {Object.keys(auraDescriptions).map(item => (
            <AuraButtons
              aura={item}
              key={item}
              selected={voteDetails.includes(item)}
              handleAuraVote={this.handleAuraVote}
            />
          ))}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  voteDetails: PropTypes.array.isRequired,
  // details: PropTypes.object,
  // show: PropTypes.bool,
};
