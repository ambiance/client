import React from 'react';
import PropTypes from 'prop-types';

class TeamMember extends React.Component {
  render() {
    const { img, fullName, role, mailLink } = this.props;
    return (
      <div className="teamMemberCardContainer">
        <div className="teamMemberCard" tabIndex="0" role="button">
          <div className="side">
            <img className="teamMemberImage" src={img} alt="profile" />
          </div>
          <div className="side back">
            <div className="teamMemberInfo">
              <h2>{fullName}</h2>
              <span>{role}</span>
              <a className="teamMemberEmailLink" href={mailLink}>
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
  aura: PropTypes.string.isRequired,
  mailLink: PropTypes.string.isRequired,
};

export default TeamMember;
