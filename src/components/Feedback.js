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
  handleAuraVote = event => {
    console.log(event);
  };

  render() {
    const { details, show } = this.props;
    return (
      <div className="modalFeedback">
        {/* Call to action */}
        <p className="feedbackHeader"> Let us know what you think!</p>
        {/* Aura pills */}
        <form className="buttonsContainer">
          {auraDescriptions.map((item, i) => (
            <AuraButtons
              aura={item.aura}
              key={item.aura}
              backgroundColor={item.aura}
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
