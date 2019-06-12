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
            {
              angle: voteAuraDetails.poll.casual,
              label:
                voteAuraDetails.poll.casual <= 0 ? '' : `casual: ${voteAuraDetails.poll.casual}`,
              className: 'casualData',
            },
            {
              angle: voteAuraDetails.poll.cheerful,
              label:
                voteAuraDetails.poll.cheerful <= 0
                  ? ''
                  : `cheerful ${voteAuraDetails.poll.cheerful}`,
              className: 'cheerfulData',
            },
            {
              angle: voteAuraDetails.poll.classy,
              label:
                voteAuraDetails.poll.classy <= 0 ? '' : `classy ${voteAuraDetails.poll.classy}`,
              className: 'classyData',
            },
            {
              angle: voteAuraDetails.poll.hipster,
              label:
                voteAuraDetails.poll.hipster <= 0 ? '' : `hipster ${voteAuraDetails.poll.hipster}`,
              className: 'hipsterData',
            },
            {
              angle: voteAuraDetails.poll.inspired,
              label:
                voteAuraDetails.poll.inspired <= 0
                  ? ''
                  : `inspired ${voteAuraDetails.poll.inspired}`,
              className: 'inspiredData',
            },
            {
              angle: voteAuraDetails.poll.intimate,
              label:
                voteAuraDetails.poll.intimate <= 0
                  ? ''
                  : `intimate ${voteAuraDetails.poll.intimate}`,
              className: 'intimateData',
            },
            {
              angle: voteAuraDetails.poll.lively,
              label:
                voteAuraDetails.poll.lively <= 0 ? '' : `lively ${voteAuraDetails.poll.lively}`,
              className: 'livelyData',
            },
            {
              angle: voteAuraDetails.poll.romantic,
              label:
                voteAuraDetails.poll.romantic <= 0
                  ? ''
                  : `romantic ${voteAuraDetails.poll.romantic}`,
              className: 'romanticData',
            },
            {
              angle: voteAuraDetails.poll.touristy,
              label:
                voteAuraDetails.poll.touristy <= 0
                  ? ''
                  : `touristy ${voteAuraDetails.poll.touristy}`,
              className: 'touristyData',
            },
            {
              angle: voteAuraDetails.poll.trendy,
              label:
                voteAuraDetails.poll.trendy <= 0 ? '' : `trendy ${voteAuraDetails.poll.trendy}`,
              className: 'trendyData',
            },
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
              // selected={voteAuraDetails.aura.includes(item)}
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
  voteAuraDetails: PropTypes.object.isRequired,
  voteActivityDetails: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
};
