import React from 'react';
import PropTypes from 'prop-types';

class AuraPills extends React.Component {
  render() {
    const { aura, backgroundColor } = this.props;
    // consts here
    return (
      <div className="resultCardAura" style={{ background: backgroundColor }}>
        {aura}
      </div>
    );
  }
}

AuraPills.propTypes = {
  aura: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default AuraPills;
