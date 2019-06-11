import React from 'react';
import PropTypes from 'prop-types';
import { RadialChart, Hint } from 'react-vis';

// Components
import AuraButtons from './AuraButtons.js';
import VotingButtons from './VotingButtons.js';
// helpers
import auraDescriptions from '../data/auraDescriptions';
// scss
import '../styles/Feedback.scss';

export default class Feedback extends React.Component {
  state = {
    value: false,
  };

  static propTypes = {
    handleAuraVote: PropTypes.func.isRequired,
    handleActivityVote: PropTypes.func.isRequired,
  };

  handleAuraVote = event => {
    this.props.handleAuraVote({
      aura: event.aura,
      vote: event.selected,
    });
  };

  handleActivityVote = event => {
    this.props.handleActivityVote({
      activity: event.buttonName,
      vote: event.selected,
    });
  };

  render() {
    const { details, voteAuraDetails, voteActivityDetails, show } = this.props;
    const { value } = this.state;

    return (
      <div className="modalFeedback">
        {/* Call to action */}
        <p className="feedbackHeader"> Submit your input by clicking the buttons below.</p>
        {/* Aura pills */}
        <p className="feedbackDescription">What Aura is this place?</p>
        <RadialChart
          className="pollDonut"
          innerRadius={70}
          radius={150}
          padAngle={0.04}
          showLabels
          labelsAboveChildren
          labelsRadiusMultiplier={0.9}
          data={[
            { angle: 1, label: 'casual', className: 'casualData' },
            { angle: 1, label: 'cheerful', className: 'cheerfulData' },
            { angle: 1, label: 'classy', className: 'classyData' },
            { angle: 1, label: 'hipster', className: 'hipsterData' },
            { angle: 1, label: 'inspired', className: 'inspiredData' },
            { angle: 1, label: 'intimate', className: 'intimateData' },
            { angle: 1, label: 'lively', className: 'livelyData' },
            { angle: 1, label: 'romantic', className: 'romanticData' },
            { angle: 1, label: 'touristy', className: 'touristyData' },
            { angle: 1, label: 'trendy', className: 'trendyData' },
          ]}
          width={300}
          height={300}
          onValueMouseOver={v => this.setState({ value: v })}
          onSeriesMouseOut={v => this.setState({ value: false })}
        >
          {value !== false && <Hint value={value} />}
        </RadialChart>

        <div className="buttonsContainer">
          {Object.keys(auraDescriptions).map(item => (
            <AuraButtons
              aura={item}
              key={item}
              selected={voteAuraDetails.includes(item)}
              handleAuraVote={this.handleAuraVote}
            />
          ))}
        </div>
        {/* Activity pills */}
        <p className="feedbackDescription">What activities is it good for?</p>
        <div className="buttonsContainer">
          {Object.keys(details.activities).map(item => (
            <VotingButtons
              buttonName={item}
              key={item}
              selected={voteActivityDetails.includes(item)}
              handleVote={this.handleActivityVote}
            />
          ))}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  details: PropTypes.object.isRequired,
  voteAuraDetails: PropTypes.array.isRequired,
  voteActivityDetails: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
};
