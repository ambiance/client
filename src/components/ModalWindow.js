import React from "react";
import BusinessDescription from "../components/BusinessDescription";

const ModalWindow = ({ show, details, component }) => {
  return component;
};

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
