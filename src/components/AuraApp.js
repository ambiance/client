import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import jwt from 'jsonwebtoken';
import ProtectedRoute from './ProtectedRoute';
import API from '../utils/API';
import Home from './Home';
import About from './About';
import MeetTheTeam from './MeetTheTeam';
import FourOhFour from './404';
import auraLogo from '../assets/img/auraLogo.png';
import Footer from './Footer';
import slideImages from './slideImages';

class AuraApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalShowing: false,
      modalDetails: {}
    };
  }
  componentWillMount() {
    // Get the auth token from local storage and set the auth state to true.
    const token = localStorage.getItem('auraUserToken');
    if (token) {
      const tokenString = token.split(' ');
      const decodedToken = jwt.decode(tokenString[1], { complete: true });
      const { exp } = decodedToken.payload;
      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime <= exp) {
        API.defaults.headers.common.Authorization = token;
        this.setState({ isAuthenticated: true });

        // Log the user in with token
        API.get('auth/login').then(response => {
          this.setState({ user: response.data.user });
        });
      } else {
        // Remove the token from local storage
        localStorage.removeItem('auraUserToken');
        // Warn the user that they have been logged out and need to log back in.
        Swal.fire(
          'Logout Warning',
          'You have been logged out due to an expired account token. Please login for continued account access.',
          'warning'
        );
      }
    }
  }

  // force browser to preload slideshow images
  componentDidMount() {
    slideImages.forEach(slide => {
      const img = new Image();
      img.src = slide.src;
    });
  }

  // Functions for Modals
  openModalHandler = details => {
    this.setState({
      isModalShowing: true,
      modalDetails: { details }
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalShowing: false
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <header>
            <NavLink to='/'>
              <img src={auraLogo} alt='auraLogo' className='headerLogo' />
            </NavLink>

            <nav>
              <ul>
                <li className='liActive'>
                  <NavLink exact to='/'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About Aura</NavLink>
                </li>
                <li>
                  <NavLink to='/meettheteam'>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            {/* <Route path="/" exact component={Home} /> */}
            <Route
              path='/'
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
              render={props => (
                <Login {...props} handleLogin={this.handleLogin} handleSignup={this.handleSignup} />
              )}
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
              logout={this.handleLogout}
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
