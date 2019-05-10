import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

function setGA(pathName) {
  ReactGA.pageview(pathName);
}

//
/**
 * React Helmet wrapper. Dynamically adds head tags when added to a React component.
 * @param {string} props.pathName Path of current page
 * @param {string} props.title Name of title
 */
const Head = ({ pathName, title }) => {
  setGA(pathName);
  return (
    <Helmet>
      <title>{title || 'Aura'}</title>
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  pathName: PropTypes.string.isRequired,
};

export default Head;
