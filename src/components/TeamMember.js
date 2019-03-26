import React from 'react';
import PropTypes from 'prop-types';

import '../css/header.css';
import '../css/main.css';

class TeamMember extends React.Component {
  render() {
    return (
      <section id={this.props.sectionId} className="halfpics">
        <img src={this.props.img} alt="profile" />
        <ul id="title">
          <h3>{this.props.fullName}</h3>
          <li className="role">Role: {this.props.role}</li>
          <li className="fav">Favorite Aura: {this.props.aura}</li>
          <li className="info">
            <a href={this.props.link}>Contact Me</a>
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
