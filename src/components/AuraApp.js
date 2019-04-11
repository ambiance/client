import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import API from '../utils/API';
import Home from './Home';
import About from './About';
import MeetTheTeam from './MeetTheTeam';
import Login from './LoginPage';
import Profile from './Dashboard';
import FourOhFour from './404';
import auraLogo from '../assets/img/auraLogo.png';
import Footer from './Footer';
import slideImages from './slideImages';

class AuraApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      user: {},
      isModalShowing: false,
      modalDetails: '',
    };
  }
  componentWillMount() {
    // Get the auth token from local storage and set the auth state to true.
    const token = localStorage.getItem('auraUserToken');
    if (token) {
      API.defaults.headers.common.Authorization = token;
      // FIXME: Not sure if we need to set the user here as well...
      this.setState({ isAuthenticated: true });
    }
  }

  // force browser to preload slideshow images
  componentDidMount() {
    slideImages.forEach(slide => {
      const img = new Image();
      img.src = slide.src;
    });
  }

  // FIXME: Not sure if needed...
  handleSignup = () => {};

  handleLogin = user => {
    this.setState({ isAuthenticated: true, user });
  };

  handleLogout = () => {
    // Revoke jwt from user requests
    API.defaults.headers.common.Authorization = '';
    // Remove token from local storage
    localStorage.removeItem('auraUserToken');
    // set user and authentication to empty / false respectively
    this.setState({ isAuthenticated: false, user: {} });
    // redirect user to home page / login page.
    alert('Sorry to see you go...');
  };

  // Functions for Modals
  openModalHandler = details => {
    this.setState({
      isModalShowing: true,
      modalDetails: { details },
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalShowing: false,
    });
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
                {isAuthenticated ? (
                  <React.Fragment>
                    <li>
                      <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                      {/* FIXME: Still shows as active tab. */}
                      <NavLink to="/" onClick={this.handleLogout}>
                        Logout
                      </NavLink>
                    </li>
                  </React.Fragment>
                ) : (
                  <li>
                    <NavLink to="/login">Login/Signup</NavLink>
                  </li>
                )}
              </ul>
            </nav>
          </header>
          <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <Route
              path="/"
              exact
              render={props => (
                <Home
                  modalDetails={this.state.modalDetails}
                  isShowing={this.state.isModalShowing}
                  openModal={this.openModalHandler}
                  closeModal={this.closeModalHandler}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/meettheteam" component={MeetTheTeam} />
            <Route
              path="/login"
              render={props => <Login {...props} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />}
            />
            <ProtectedRoute
              path="/dashboard"
              isAuthenticated={isAuthenticated}
              user={user}
              component={Profile}
              modalDetails={this.state.modalDetails}
              isModalShowing={this.state.isModalShowing}
              openModal={this.openModalHandler}
              closeModal={this.closeModalHandler}
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
