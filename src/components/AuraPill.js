import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AuraPill.scss';

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

const ToolTip = ({ toolTip }) => {
  let { position = 'Top', description, upVote } = toolTip;

  // Capitalize first letter
  position = position.charAt(0).toUpperCase() + position.slice(1);

  return (
    <>
      <div className={`auraPillToolTip${position}`}>
        {description ? <p>{description}</p> : ''}
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
