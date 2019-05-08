// Credit: https://alligator.io/react/react-accordion-component/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    /*
    Check for one or many AccordianSection children
    
    Warning!!!!: You cannot have multiple sections in an accordian with the same label. It will trigger both of them because of the way the state is set up.
    */
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
  handleClick = label => {
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
      handleClick,
      props: { children, title },
      state: { openSections },
    } = this;

    return (
      <section className="accordion">
        {/* Optional Title */}
        {title ? <h3 className="accordionHeader">{title}</h3> : ''}
        {/* Check for one or many AccordianSection children */}
        {Array.isArray(children) ? (
          children.map((child, i) => (
            <AccordionSection
              key={i}
              isOpen={!!openSections[child.props.label]}
              label={child.props.label}
              handleClick={handleClick}
            >
              {child.props.children}
            </AccordionSection>
          ))
        ) : (
          <AccordionSection
            isOpen={!!openSections[children.props.label]}
            label={children.props.label}
            handleClick={handleClick}
          >
            {children.props.children}
          </AccordionSection>
        )}
      </section>
    );
  }
}

export default Accordion;

/**
 * Clickable helper component to show expanded information
 * @param {*} props Parent Values
 * @param {Function} props.handleClick Handler method to toggle section
 * @param {boolean} props.isOpen Toggled flag
 * @param {string} props.label Title
 * @param {Object} props.children Nested HTML elements
 */
const AccordionSection = ({ handleClick, isOpen, label, children }) => (
  <div className="accordionSection" style={{ backgroundColor: `var(--${label || 'white'})` }}>
    <button
      onClick={() => handleClick(label)}
      className="accordionButton"
      style={{ color: `var(--${label || 'off-black'})` }}
    >
      {label}
      <div>
        {!isOpen && <span>&#8592;</span>}
        {isOpen && <span>&#8595;</span>}
      </div>
    </button>
    {isOpen && <section style={{ padding: '2rem' }}>{children}</section>}
  </div>
);

AccordionSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
