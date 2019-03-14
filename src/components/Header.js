import React from "react";
import "../css/header.css";
import auraLogo from "../assets/img/auraLogo.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="index.html">
          <img
            src={auraLogo}
            alt="auraLogo"
            className="headerLogo"
            href="#home"
          />
        </a>

        <nav>
          <ul>
            <li className="liActive">
              <a className="btnActive" href="./index.html">
                Home
              </a>
            </li>
            <li>
              <a className="btn" href="./about.html">
                About Aura
              </a>
            </li>
            <li>
              <a className="btn" href="./meetTheTeam.html">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
