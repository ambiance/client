import React from 'react';
import TeamMember from './TeamMember';
import memberInfo from '../data/memberInfo';
import '../css/header.css';
import '../css/main.css';
import background from '../assets/img/trinityBackgroundWhite.png';

class MeetTheTeam extends React.Component {
  render() {
    return (
      <div background={background}>
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
      </div>
    );
  }
}

export default MeetTheTeam;
