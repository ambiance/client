import React from 'react';
import '../css/ResultCard.css';

class AuraPills extends React.Component {
  render() {
    const { aura } = this.props;
    // consts here
    return <span className="resultCardAura">{aura}</span>;
  }

  // this.querySelector(".resultCard").onClick
}

export default AuraPills;
