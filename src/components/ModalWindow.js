import React from 'react';
import BusinessDescription from './BusinessDescription';

const ModalWindow = ({ show, details, component }) => component;

/*
if (component) {
    return component;
  } else if (details) {
    return <BusinessDescription show={show} details={details} />;
  } else {
    return <h1>Nothing is here...</h1>;
  }
*/

export default ModalWindow;
