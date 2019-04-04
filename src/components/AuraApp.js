import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import About from './About';
import MeetTheTeam from './MeetTheTeam';
import Login from './LoginPage';
import Profile from './Profile';
import FourOhFour from './404';
import auraLogo from '../assets/img/auraLogo.png';
import Footer from './Footer';
import slideImages from './slideImages';

class AuraApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      user: {
        username: 'scott',
      },
    };
  }

  // force browser to preload slideshow images
  componentDidMount() {
    slideImages.forEach(slide => {
      const img = new Image();
      img.src = slide.src;
    });
  }

  handleLogin = credentials => {
    console.log(credentials);
    // Make axios call to server to authenticate.
    // Set response jwt to all further requests.
    // set user and authentication in state.
    // redirect User to their profile / home page.
  };

  handleLogout = () => {
    // Revoke jwt from user requests
    // set user and authentication to empty / false respectively
    // redirect user to home page / login page.
  };

  render() {
    const { isAuthenticated, user } = this.state;
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
                {!isAuthenticated ? (
                  <li>
                    <NavLink to="/login">Login/Signup</NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                )}
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/meettheteam" component={MeetTheTeam} />
            <Route
              path="/login"
              render={props => <Login {...props} handleLogin={this.handleLogin} />}
            />
            <ProtectedRoute
              path="/profile"
              isAuthenticated={isAuthenticated}
              user={user}
              component={Profile}
            />
            <Route component={FourOhFour} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default AuraApp;
