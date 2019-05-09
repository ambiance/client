import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

//
/**
 * React Helmet wrapper. Dynamically adds head tags when added to a React component.
 * @param {String} props.title Name of title
 */
const Head = ({ title }) => (
  <Helmet>
    <title>{title || 'Aura'}</title>
  </Helmet>
);

Head.propTypes = {
  title: PropTypes.string,
};

export default Head;
