import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/AuraPill.scss';

const AuraPill = ({ aura, backgroundColor, toolTip }) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const toggleToolTip = event => {
    event.stopPropagation();
    if (toolTip) {
      setShowToolTip(!showToolTip);
    }
  };
  return (
    <button className="auraPillContainer" onClick={toggleToolTip}>
      {showToolTip ? <ToolTip toolTip={toolTip} /> : ''}
      <div className="auraPill" style={{ background: backgroundColor }}>
        {aura}
      </div>
    </button>
  );
};

AuraPill.propTypes = {
  aura: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  toolTip: PropTypes.shape({
    description: PropTypes.string,
    upVote: PropTypes.number,
  }),
};

export default AuraPill;

const ToolTip = ({ toolTip }) => {
  const { description, upVote } = toolTip;
  return (
    <>
      <div className="auraPillToolTip">
        {description ? <p>{description}</p> : ''}
        {upVote ? <p>👍: {upVote}</p> : ''}
      </div>
      <div className="arrow-down" />
    </>
  );
};

ToolTip.propTypes = {
  toolTip: PropTypes.shape({
    description: PropTypes.string,
    upVote: PropTypes.number,
  }),
};
