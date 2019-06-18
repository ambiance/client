import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AuraPill.scss';

/**
 * Singular text property for each aura.
 * @param {Object} props Passed props
 * @param {string} props.aura Aura text
 * @param {string} props.backgroundColor Aura color
 * @param {Object} props.toolTip Object tooltip
 */
const AuraPill = ({ aura, backgroundColor, toolTip }) => {
  const toggleToolTip = event => {
    event.stopPropagation();
  };
  return (
    <button className="auraPill" onClick={toggleToolTip} style={{ background: backgroundColor }}>
      {aura}
      {toolTip ? <ToolTip toolTip={toolTip} /> : ''}
    </button>
  );
};

AuraPill.propTypes = {
  aura: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  toolTip: PropTypes.shape({
    position: PropTypes.string.isRequired,
    description: PropTypes.string,
    upVote: PropTypes.number,
  }),
};

export default AuraPill;

/**
 * Hidden description adding additional information
 * @param {props} props Passed props
 * @param {Object} props.toolTip Object tooltip
 */
const ToolTip = ({ toolTip }) => {
  let { position = 'Top', description, upVote } = toolTip;

  // Capitalize first letter
  position = position.charAt(0).toUpperCase() + position.slice(1);

  return (
    <>
      <div className={`auraPillToolTip${position}`}>
        {description ? <p>{description}</p> : 'No description available at this time.'}
        {upVote ? (
          <p>
            <span role="img" aria-label="thumbs up">
              👍
            </span>
            : {upVote}
          </p>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

ToolTip.propTypes = {
  toolTip: PropTypes.shape({
    position: PropTypes.string.isRequired,
    description: PropTypes.string,
    upVote: PropTypes.number,
  }),
};
