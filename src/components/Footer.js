import React from 'react';
import auraLogo from '../assets/img/auraLogo.png';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <img src={auraLogo} alt="auraLogo" />
        <p>© 2019 Aura, Inc.</p>
      </footer>
    );
  }
}

export default Footer;
