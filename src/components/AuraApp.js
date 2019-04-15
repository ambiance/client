import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
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
            <Route path='/about' component={About} />
            <Route path='/meettheteam' component={MeetTheTeam} />
            <Route component={FourOhFour} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default AuraApp;
