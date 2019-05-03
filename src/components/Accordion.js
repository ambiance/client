// Credit: https://alligator.io/react/react-accordion-component/

/*
Warning!!!!
You cannot have multiple sections in an accordian with the same label.
It will trigger both of them because of the way the state is set up.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionSection from './AccordionSection';
import '../styles/Accordion.scss';

class Accordion extends Component {
  static propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);

    const openSections = {};

    const { children } = this.props;
    console.log(this.props);
    // Check for one or many AccordianSection children
    if (Array.isArray(children)) {
      children.forEach(child => {
        if (child.props.isOpen) {
          openSections[child.props.label] = true;
        }
      });
    } else if (children.props.isOpen) {
      openSections[children.props.label] = true;
    }

    this.state = { openSections };
  }

  /**
   * Toggles the open state
   * @param {String} label Title of the accordion drop down
   */
  onClick = label => {
    const {
      props: { allowMultipleOpen },
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen,
        },
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen,
        },
      });
    }
  };

  render() {
    const {
      onClick,
      props: { children, title },
      state: { openSections },
    } = this;

    return (
      <section className="accordion">
        {/* Optional Title */}
        {title ? <h3 className="accordion-header">{title}</h3> : ''}
        {/* Check for one or many AccordianSection children */}
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <AccordionSection
              key={i}
              isOpen={!!openSections[child.props.label]}
              label={child.props.label}
              onClick={onClick}
            >
              {child.props.children}
            </AccordionSection>
          ))
        ) : (
          <AccordionSection
            isOpen={!!openSections[children.props.label]}
            label={children.props.label}
            onClick={onClick}
          >
            {children.props.children}
          </AccordionSection>
        )}
      </section>
    );
  }
}

export default Accordion;
