import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Swal from 'sweetalert2';
import jwt from 'jsonwebtoken';

import { Home, About, Contact, Login, Dashboard, FourOhFour } from './pages';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import API, { alertErrorHandler } from './services/API';
import slideImages from './data/slideImages';
import auraLogo from './assets/img/auraLogo.png';
import './styles/main.scss';

class AuraApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      user: {},
      isModalShowing: false,
      modalDetails: {},
      voteAuraDetails: [],
      voteActivityDetails: [],
    };
  }

  // ==================================== Lifecycle Hooks ==========================================

  // FIXME: Might be throwing memory leaks if the request does not work... check this out...
  componentWillMount() {
    this.handleMountedLogin();
  }

  componentDidMount = () => {
    // force browser to preload slideshow images when called here, in AuraApp
    this.initializeSlide();
  };

  // ==================================== Local Functions ==========================================

  /**
   * Loads the slide images
   */
  initializeSlide = () => {
    slideImages.forEach(slide => {
      const img = new Image();
      img.src = slide.src;
    });
  };

  // ------------------------------------ Event Handlers ---------------------------------------

  /**
   * Login event handler - Sets state for an already authenticated user that is re-entering the website
   */
  handleMountedLogin = () => {
    // Get the auth token from local storage and set the auth state to true.
    const token = localStorage.getItem('auraUserToken');
    if (token) {
      const tokenString = token.split(' ');
      const decodedToken = jwt.decode(tokenString[1], { complete: true });
      const { exp } = decodedToken.payload;
      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime <= exp) {
        API.defaults.headers.common.Authorization = token;

        // Log the user in with token
        API.get('account/read-user')
          .then(response => {
            this.setState({ user: response.data.user, isAuthenticated: true });
          })
          .catch(err => {
            alertErrorHandler(err);
          });
      } else {
        // Remove the token from local storage
        localStorage.removeItem('auraUserToken');
        // Warn the user that they have been logged out and need to log back in.
        Swal.fire(
          'Logout Warning',
          'You have been logged out. Please login for continued account access.',
          'warning'
        );
      }
    }
  };

  /**
   * Login event handler - Sets state for all user related data when logging in.
   * @param {Object} user Authenticated user information
   */
  handleLogin = user => {
    this.setState({
      isAuthenticated: true,
      user,
    });
  };

  /**
   * Logout event handler - Removes all user related data when logging out
   */
  handleLogout = () => {
    // Revoke jwt from user requests
    API.defaults.headers.common.Authorization = '';
    // Remove token from local storage
    localStorage.removeItem('auraUserToken');
    // Remove all user related data
    // set user and authentication to empty / false respectively
    this.setState({
      isAuthenticated: false,
      user: {},
      likedBusinesses: [],
      voteAuraDetails: [],
      voteActivityDetails: [],
    });
    
    // redirect user to home page / login page.
    Swal.fire({
      position: 'top-end',
      text: 'Sorry to see you go...',
      showConfirmButton: false,
      timer: 1200,
    });
  };

  handleAuraVote = event => {
    // State verifies whether you are logged in or not
    if (this.state.isAuthenticated) {
      API.patch('/businesses/vote-auras', {
        businessId: this.state.modalDetails._id,
        aura: event.aura,
      }).then(response => {
        if (response.data.status.aura.includes(event.aura)) {
          Swal.fire({
            position: 'top',
            text: `You voted ${event.aura} for "${this.state.modalDetails.name}"`,
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          Swal.fire({
            position: 'top',
            text: `You unvoted ${event.aura} for "${this.state.modalDetails.name}"`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
        this.setState({ voteAuraDetails: response.data.status.aura });
      });
    } else {
      Swal.fire({
        position: 'top',
        text: 'You are not logged in',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  handleActivityVote = event => {
    // State verifies whether you are logged in or not
    if (this.state.isAuthenticated) {
      API.patch('/businesses/vote-activities', {
        businessId: this.state.modalDetails._id,
        activity: event.activity,
      }).then(response => {
        if (response.data.status.activity.includes(event.activity)) {
          Swal.fire({
            position: 'top',
            text: `You voted ${event.activity} for "${this.state.modalDetails.name}"`,
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          Swal.fire({
            position: 'top',
            text: `You unvoted ${event.activity} for "${this.state.modalDetails.name}"`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
        this.setState({ voteActivityDetails: response.data.status.activity });
      });
    } else {
      Swal.fire({
        position: 'top',
        text: 'You are not logged in',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // Functions for Modals
  openModalHandler = details => {
    this.setState({
      isModalShowing: true,
      modalDetails: details,
    });
    // If user is logged in, prepopulate the aura votes
    if (this.state.isAuthenticated) {
      // Finds index of user id
      const auraIndex = details.usersVotedAura.findIndex(
        item => item.userId === this.state.user._id
      );
      const activityIndex = details.usersVotedActivity.findIndex(
        item => item.userId === this.state.user._id
      );
      // checks if there is a user
      if (auraIndex !== -1) {
        this.setState({
          voteAuraDetails: details.usersVotedAura[auraIndex].aura,
        });
      } else {
        // Clears votes if there are none
        this.setState({
          voteAuraDetails: [],
        });
      }
      if (activityIndex !== -1) {
        this.setState({
          voteActivityDetails: details.usersVotedActivity[activityIndex].activity,
        });
      } else {
        // Clears votes if there are none
        this.setState({
          voteActivityDetails: [],
        });
      }
    }
  };

  closeModalHandler = () => {
    this.setState({
      isModalShowing: false,
    });
  };

  openFeedbackhandler = () => {
    // Get auras from database
    API.get('/businesses/vote-auras', {
      params: {
        businessId: this.state.modalDetails._id,
      },
    }).then(response => {
      this.setState({ voteAuraDetails: response.data.status.aura });
    });

    // Get activities from database
    API.get('/businesses/vote-activities', {
      params: {
        businessId: this.state.modalDetails._id,
      },
    }).then(response => {
      this.setState({ voteActivityDetails: response.data.status.activity });
    });
  };

  // Method used to like a business
  likeBusinessHandler = async business => {
    // State verifies whether you are logged in or not
    if (this.state.isAuthenticated) {
      // Gets token from local storage
      const token = localStorage.getItem('auraUserToken');
      // Reads user from the database
      await API.get('account/read-user', {
        token,
      }).then(response => {
        // To see if the user already has the business._id in his list of favorite businesses
        const output = response.data.user.favorites.filter(
          favorite => favorite.businessId === business._id
        );
        // If statements based on output of the filter
        if (output.length === 0) {
          Swal.fire({
            position: 'top',
            text: `You liked "${business.name}"`,
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          Swal.fire({
            position: 'top',
            text: `You unliked "${business.name}"`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });

      await API.patch('account/like-business', {
        token,
        businessId: business._id,
      });

      await API.get('account/read-user', {
        token,
      }).then(response => {
        this.setState({ user: response.data.user });
      });
    } else {
      Swal.fire({
        position: 'top',
        text: 'You are not logged in',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // ==================================== UI Render ==========================================

  render() {
    const { isAuthenticated, user } = this.state;
    return (
      <BrowserRouter>
        <Header auraLogo={auraLogo} isAuthenticated={isAuthenticated} />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route
            path="/"
            exact
            render={props => (
              <Home
                {...props}
                isAuthenticated={isAuthenticated}
                modalDetails={this.state.modalDetails}
                voteAuraDetails={this.state.voteAuraDetails}
                voteActivityDetails={this.state.voteActivityDetails}
                isShowing={this.state.isModalShowing}
                openModal={this.openModalHandler}
                closeModal={this.closeModalHandler}
                openFeedback={this.openFeedbackhandler}
                handleAuraVote={this.handleAuraVote}
                handleActivityVote={this.handleActivityVote}
                likeBusiness={this.likeBusinessHandler}
                user={this.state.user}
              />
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/login"
            render={props => (
              <Login
                {...props}
                handleLogin={this.handleLogin}
                // handleSwitch={this.handleSwitchToSignup}
              />
            )}
          />
          <ProtectedRoute
            path="/dashboard"
            isAuthenticated={isAuthenticated}
            user={user}
            component={Dashboard}
            modalDetails={this.state.modalDetails}
            isModalShowing={this.state.isModalShowing}
            openModal={this.openModalHandler}
            closeModal={this.closeModalHandler}
            logout={this.handleLogout}
          />
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default AuraApp;
