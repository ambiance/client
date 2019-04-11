import React from 'react';
import '../css/ResultCard.css';

class AuraPills extends React.Component {
  render() {
    const { aura } = this.props;
    // consts here
    return <div className="resultCardAura">{aura}</div>;
  }
}

export default AuraPills;
