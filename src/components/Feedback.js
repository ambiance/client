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
  static propTypes = {
    handleAuraVote: PropTypes.func.isRequired,
    handleActivityVote: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      showAuraPoll: false,
      showActivityPoll: false,
    };
  }

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

  // TODO: Add classname
  structureDonutData = (props, fields) => {
    const { poll } = props;
    const theData = fields.map(field => ({
      angle: poll[field],
      label: poll[field] <= 0 ? '' : `${poll[field]}`,
      className: `${field}Data`,
    }));
    return theData;
  };

  render() {
    const { details, voteAuraDetails, voteActivityDetails, show } = this.props;

    const auraDonut = this.structureDonutData(voteAuraDetails, [
      'casual',
      'cheerful',
      'classy',
      'hipster',
      'inspired',
      'intimate',
      'lively',
      'romantic',
      'touristy',
      'trendy',
    ]);

    const activityDonut = this.structureDonutData(voteActivityDetails, [
      'eating',
      'drinking',
      'dating',
      'studying',
      'relaxing',
      'exercising',
      'gaming',
      'leisure',
      'pleasure',
      'hobbies',
    ]);

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
          <div className="pollWrapper">
            <RadialChart
              className="pollDonut"
              innerRadius={40}
              radius={100}
              padAngle={0.04}
              showLabels
              labelsAboveChildren
              labelsRadiusMultiplier={0.9}
              data={auraDonut}
              width={200}
              height={200}
            />
            <div className="pollLegend">
              {Object.keys(auraDescriptions).map(item => (
                <div className="pollLegendItem">
                  <svg height="14" width="14">
                    <path d="M 0 0 L 0 14 L 14 14 L 14 0 Z" className={item} />
                  </svg>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
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
            innerRadius={40}
            radius={100}
            padAngle={0.04}
            showLabels
            labelsAboveChildren
            labelsRadiusMultiplier={0.9}
            data={activityDonut}
            width={200}
            height={200}
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
