import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import '../styles/404.scss';
import JON from '../assets/img/Jon404.jpg';

/**
 * Missing page - Someone went to the wrong location (404 error)
 * @param {Object} props Passed Props
 * @param {Object} props.location Location object passed from router
 * @param {string} props.location.pathname Path name
 */
const FourOhFour = ({ location: { pathname: pathName } }) => (
  <main className="fourOhFourMain">
    <Head pathName={pathName} title="Page Not Found | Aura" />
    <h1 className="fourOhFourHeading">404 Error</h1>
    <h2 className="fourOhFourSubheading">Page Not Found</h2>
    <img className="fourOhFourPicture" src={JON} alt="404" />
  </main>
);

FourOhFour.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default FourOhFour;
