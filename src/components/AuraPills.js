import React from 'react';
import '../css/ResultCard.css';
import '../css/palette.css';

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

export default AuraPills;
