import React from 'react';
import PropTypes from 'prop-types';

export default class Feedback extends React.Component {
  render() {
    const { details, show } = this.props;
    return (
      <div className="modalFeedback">
        <p className="feedbackHeader"> Let us know what you think!</p>
      </div>
    );
  }
}

Feedback.propTypes = {
  details: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
};
