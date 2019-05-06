import React from 'react';

import Head from './Head';
import TeamMember from '../components/TeamMember';
import memberInfo from '../data/memberInfo';
import background from '../assets/img/trinityBackgroundWhite.png';
import '../styles/MeetTheTeam.scss';

class MeetTheTeam extends React.Component {
  render() {
    return (
      <main background={background}>
        <Head title="Contact | Aura" />
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

export default MeetTheTeam;
