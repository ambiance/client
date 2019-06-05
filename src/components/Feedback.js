import React from 'react';
import PropTypes from 'prop-types';

// Components
import AuraButtons from './AuraButtons.js';
import VotingButtons from './VotingButtons.js';
// helpers
import { getColor } from './helpers/auraColors';
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

  tester = () => {
    console.log(this.props.details);
  };

  render() {
    const { details, voteDetails, show } = this.props;

    console.log(auraDescriptions);

    return (
      <div className="modalFeedback">
        {/* Call to action */}
        <p className="feedbackHeader"> Submit your input by clicking the buttons below.</p>
        {/* Aura pills */}
        <p className="auraFeedbackDescription">What Aura is this place?</p>
        <div className="buttonsContainer">
          {Object.keys(auraDescriptions).map(item => (
            <AuraButtons
              aura={item}
              key={item}
              selected={voteDetails.includes(item)}
              handleAuraVote={this.handleAuraVote}
            />
          ))}
          {/* Activity pills */}
          <p className="activityFeedbackDescription">
            Click an Aura to vote what you think about this place.
          </p>
          <button onClick={this.tester}>Hello</button>
          {/* <div className="buttonsContainer">
            {Object.keys(auraDescriptions).map(item => (
              <VotingButtons
                buttonName={item}
                key={item}
                selected={voteDetails.includes(item)}
                // handleVote={this.handleActivityVote}
              />
            ))}
          </div> */}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  details: PropTypes.object.isRequired,
  voteDetails: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
};
