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
      <div className="arrowDown" />
    </>
  );
};

ToolTip.propTypes = {
  toolTip: PropTypes.shape({
    description: PropTypes.string,
    upVote: PropTypes.number,
  }),
};
