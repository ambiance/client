// Credit: https://alligator.io/react/react-accordion-component/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label, children },
    } = this;

    return (
      <div className="accordion-section" style={{ backgroundColor: `var(--${label || 'white'})` }}>
        <button
          onClick={onClick}
          className="accordion-button"
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
  }
}

export default AccordionSection;
