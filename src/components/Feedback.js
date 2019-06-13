import React from 'react';
import PropTypes from 'prop-types';
import { RadialChart } from 'react-vis';

// Components
import AuraButtons from './AuraButtons.js';
import VotingButtons from './VotingButtons.js';
// helpers
import auraDescriptions from '../data/auraDescriptions';
// scss
import '../styles/Feedback.scss';

export default class Feedback extends React.Component {
  state = {
    showAuraPoll: false,
    showActivityPoll: false,
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

  handleAuraPollSwitch = () => {
    this.setState(prevState => ({
      showAuraPoll: !prevState.showAuraPoll,
    }));
  };

  handleActivityPollSwitch = () => {
    this.setState(prevState => ({
      showActivityPoll: !prevState.showActivityPoll,
    }));
  };

  render() {
    const { details, voteAuraDetails, voteActivityDetails, show } = this.props;

    return (
      <div className="modalFeedback">
        {/* Call to action */}
        <p className="feedbackHeader"> Submit your input by clicking the buttons below.</p>
        {/* Aura pills */}
        <p className="feedbackDescription">What Aura is this place?</p>
        <p className="feedbackVoteDescription">
          See what other people voted,
          <button type="button" className="nipsey" onClick={this.handleAuraPollSwitch}>
            click here!
          </button>
        </p>
        {this.state.showAuraPoll ? (
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
                  voteAuraDetails.poll.hipster <= 0
                    ? ''
                    : `hipster ${voteAuraDetails.poll.hipster}`,
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
          />
        ) : null}

        <div className="buttonsContainer">
          {Object.keys(auraDescriptions).map(item => (
            <AuraButtons
              aura={item}
              key={item}
              selected={voteAuraDetails.aura.includes(item)}
              handleAuraVote={this.handleAuraVote}
            />
          ))}
        </div>
        {/* Activity pills */}
        <p className="feedbackDescription">What activities is it good for?</p>
        <p className="feedbackVoteDescription">
          See what other people voted,
          <button type="button" className="nipsey" onClick={this.handleActivityPollSwitch}>
            click here!
          </button>
        </p>
        {this.state.showActivityPoll ? (
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
                angle: voteActivityDetails.poll.eating,
                label:
                  voteActivityDetails.poll.eating <= 0
                    ? ''
                    : `eating: ${voteActivityDetails.poll.eating}`,
              },
              {
                angle: voteActivityDetails.poll.drinking,
                label:
                  voteActivityDetails.poll.drinking <= 0
                    ? ''
                    : `drinking ${voteActivityDetails.poll.drinking}`,
              },
              {
                angle: voteActivityDetails.poll.dating,
                label:
                  voteActivityDetails.poll.dating <= 0
                    ? ''
                    : `dating ${voteActivityDetails.poll.dating}`,
              },
              {
                angle: voteActivityDetails.poll.studying,
                label:
                  voteActivityDetails.poll.studying <= 0
                    ? ''
                    : `studying ${voteActivityDetails.poll.studying}`,
              },
              {
                angle: voteActivityDetails.poll.relaxing,
                label:
                  voteActivityDetails.poll.relaxing <= 0
                    ? ''
                    : `relaxing ${voteActivityDetails.poll.relaxing}`,
              },
              {
                angle: voteActivityDetails.poll.exercising,
                label:
                  voteActivityDetails.poll.exercising <= 0
                    ? ''
                    : `exercising ${voteActivityDetails.poll.exercising}`,
              },
              {
                angle: voteActivityDetails.poll.gaming,
                label:
                  voteActivityDetails.poll.gaming <= 0
                    ? ''
                    : `gaming ${voteActivityDetails.poll.gaming}`,
              },
              {
                angle: voteActivityDetails.poll.leisure,
                label:
                  voteActivityDetails.poll.leisure <= 0
                    ? ''
                    : `leisure ${voteActivityDetails.poll.leisure}`,
              },
              {
                angle: voteActivityDetails.poll.pleasure,
                label:
                  voteActivityDetails.poll.pleasure <= 0
                    ? ''
                    : `pleasure ${voteActivityDetails.poll.pleasure}`,
              },
              {
                angle: voteActivityDetails.poll.hobbies,
                label:
                  voteActivityDetails.poll.hobbies <= 0
                    ? ''
                    : `hobbies ${voteActivityDetails.poll.hobbies}`,
              },
            ]}
            width={300}
            height={300}
          />
        ) : null}

        <div className="buttonsContainer">
          {Object.keys(details.activities).map(item => (
            <VotingButtons
              buttonName={item}
              key={item}
              selected={voteActivityDetails.activity.includes(item)}
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
  voteActivityDetails: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
};
