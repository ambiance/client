import React from 'react';
import PropTypes from 'prop-types';

class TeamMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  /**
   * Event handler - Key events for toggling team member.
   * @param {Event} event Key press event
   */
  toggleKeyActive = event => {
    if (event.key === ' ' || event.key === 'Enter') {
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
      this.toggleActive();
    }
  };

  /**
   * Event handler - click events for toggling team member.
   */
  toggleActive = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  /**
   * Event handler - event for sending mail inside card.
   * @param {Event} event Submit event
   */
  sendMail = event => {
    event.stopPropagation();
  };
  render() {
    const { img, fullName, role, mailLink } = this.props;
    const { active } = this.state;
    return (
      <div className="teamMemberCardContainer">
        <div
          className={`${active ? 'active ' : ''}teamMemberCard`}
          tabIndex="0"
          role="button"
          onClick={this.toggleActive}
          onKeyDown={this.toggleKeyActive}
        >
          <div className="side">
            <img className="teamMemberImage" src={img} alt={`${fullName} face`} />
          </div>
          <div className="side back">
            <div className="teamMemberInfo">
              <h2>{fullName}</h2>
              <span>{role}</span>
              <a
                className="teamMemberEmailLink"
                href={mailLink}
                onClick={this.sendMail}
                onKeyDown={this.sendMail}
              >
                Send Email &#62;
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TeamMember.propTypes = {
  img: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  mailLink: PropTypes.string.isRequired,
};

export default TeamMember;
