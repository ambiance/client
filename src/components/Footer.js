import React from 'react';
import auraLogo from '../assets/img/auraLogo.png';
import '../styles/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="pageFooter">
        <p>
          Product of <br />
          <a href="https://talentpath.com/">Talent Path</a>
        </p>
        <div>
          <div>
            <img src={auraLogo} alt="auraLogo" />
          </div>
          <p>© 2019 Aura</p>
        </div>
        <a href="https://forms.gle/wHEksF6o9FnU8WWY6">Send Feedback!</a>
      </footer>
    );
  }
}

export default Footer;
