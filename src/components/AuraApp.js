import React from "react";
import {
 BrowserRouter, Switch, Route, NavLink 
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import MeetTheTeam from "./MeetTheTeam";
import auraLogo from "../assets/img/auraLogo.png";

class AuraApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
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
                  {/* <a className="btnActive" href="./index.html">
                  Home
                </a> */}
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  {/* <a className="btn" href="./about.html">
                  About Aura
                </a> */}
                  <NavLink to="/about">About Aura</NavLink>
                </li>
                <li>
                  {/* <a className="btn" href="./meetTheTeam.html">
                  Contact
                </a> */}
                  <NavLink to="/meettheteam">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/meettheteam" component={MeetTheTeam} />
            <Route render={() => <h1>Page Not Found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AuraApp;
