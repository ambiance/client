import React from 'react';
import PropTypes from 'prop-types';

import Head from './Head';
import TeamMember from '../components/TeamMember';
import memberInfo from '../data/memberInfo';
import background from '../assets/img/trinityBackgroundWhite.png';
import '../styles/MeetTheTeam.scss';

class MeetTheTeam extends React.Component {
  render() {
    const {
      location: { pathname: pathName },
    } = this.props;
    return (
      <main background={background}>
        <Head pathName={pathName} title="Contact | Aura" />
        <section id="grid">
          {memberInfo.map(member => (
            <TeamMember
              sectionId={member.sectionId}
              key={member.fullName}
              img={member.src}
              fullName={member.fullName}
              role={member.role}
              aura={member.aura}
              link={member.link}
            />
          ))}
        </section>
      </main>
    );
  }
}

MeetTheTeam.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default MeetTheTeam;
