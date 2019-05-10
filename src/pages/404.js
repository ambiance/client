import React from 'react';
import PropTypes from 'prop-types';
import Head from './Head';
import '../styles/404.scss';

const FourOhFour = ({ location: { pathname: pathName } }) => (
  <main className="fourOhFourMain">
    <Head pathName={pathName} title="Page Not Found | Aura" />
    <h1 className="fourOhFourHeading">404 Error</h1>
    <h2 className="fourOhFourSubheading">Page Not Found</h2>
  </main>
);

FourOhFour.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default FourOhFour;
