import React from 'react';
import PropTypes from 'prop-types';
import AuraPill from './AuraPill';
import { getColor } from './helpers/auraColors';
import auraDescriptions from '../data/auraDescriptions';

class TeamMember extends React.Component {
  render() {
    const { sectionId, img, fullName, role, aura, link } = this.props;
    return (
      <section id={sectionId} className="halfpics">
        <img src={img} alt="profile" />
        <ul id="title">
          <li>
            <a href={link}>{fullName}</a>
          </li>
          <li className="role">Role: {role}</li>
          <li className="fav">
            Favorite Aura:{' '}
            <AuraPill
              id="pills"
              aura={aura}
              backgroundColor={getColor(aura)}
              toolTip={{ position: 'right', description: auraDescriptions[`${aura}`].definition }}
            />
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
