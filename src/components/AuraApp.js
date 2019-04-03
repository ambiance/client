import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import MeetTheTeam from './MeetTheTeam';
import FourOhFour from './404';
import auraLogo from '../assets/img/auraLogo.png';
import Footer from './Footer';

class AuraApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <NavLink to="/">
              <img src={auraLogo} alt="auraLogo" className="headerLogo" />
            </NavLink>

            <nav>
              <ul>
                <li className="liActive">
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Aura</NavLink>
                </li>
                <li>
                  <NavLink to="/meettheteam">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/meettheteam" component={MeetTheTeam} />
            <Route component={FourOhFour} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default AuraApp;
