import React from 'react';
import PropTypes from 'prop-types';

class TeamMember extends React.Component {
  render() {
    const { sectionId, img, fullName, role, aura, link } = this.props;
    return (
      <section id={sectionId} className="halfpics">
        <img src={img} alt="profile" />
        <ul id="title">
          <h3>{fullName}</h3>
          <li className="role">Role: {role}</li>
          <li className="fav">Favorite Aura: {aura}</li>
          <li className="info">
            <a href={link}>Contact Me</a>
          </li>
        </ul>
      </section>
    );
  }
}

TeamMember.propTypes = {
  sectionId: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  aura: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default TeamMember;
