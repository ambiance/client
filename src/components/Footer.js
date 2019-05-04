import React from 'react';
import auraLogo from '../assets/img/auraLogo.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img src={auraLogo} alt="auraLogo" />
        <p>© 2019 Aura, Inc.</p>
        {/* TODO: Add in a link to the feedback form */}
      </footer>
    );
  }
}

export default Footer;
