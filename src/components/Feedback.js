import React from 'react';
import PropTypes from 'prop-types';

// Components
import AuraButtons from './AuraButtons.js';
// helpers
import { getColor } from './helpers/auraColors';
import auraDescriptions from '../data/auraDescriptions';
// scss
import '../styles/Feedback.scss';

export default class Feedback extends React.Component {
  static propTypes = {
    handleAuraVote: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      aurasVoted: [],
    };
  }

  handleAuraVote = event => {
    this.props.handleAuraVote({
      aura: event.aura,
      vote: event.selected,
    });
  };

  render() {
    const { details, show } = this.props;
    // Find aurasVoted array for user logged
    // [TODO]
    // -----------------This should pass down the auras voted when it first renders-------------
    // If authenticated
    // DEPENDENCIES:
    //    -  userID
    //    -  ifAuthenticated
    // Get index
    const usersAuraIndex = details.usersVotedAura.findIndex(x => x.userId === 'THE USER ID!!!!');
    // Use index to find aura array
    this.state.aurasVoted = details.usersVotedAura[usersAuraIndex].aura;

    return (
      <div className="modalFeedback">
        {/* Call to action */}
        <p className="feedbackHeader"> Let us know what you think!</p>
        <p className="feedbackHeader">Click an Aura to vote what you think about this place.</p>
        <p>{details.yelpId.type}</p>
        {/* Aura pills */}
        <form className="buttonsContainer">
          {auraDescriptions.map(item => (
            <AuraButtons
              aura={item.aura}
              key={item.aura}
              selected={this.state.aurasVoted.includes(item.aura)}
              handleAuraVote={this.handleAuraVote}
            />
          ))}
        </form>
      </div>
    );
  }
}

Feedback.propTypes = {
  details: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
};
