import React from 'react';

import TeamMember from './TeamMember';
import memberInfo from './memberInfo';

import '../css/header.css';
import '../css/main.css';
import background from '../assets/img/trinityBackgroundWhite.png';

class MeetTheTeam extends React.Component {
  render() {
    return (
      <body background={background}>
        <section id="grid">
          {memberInfo.map(member => (
            <TeamMember
              sectionId={member.sectionId}
              img={member.src}
              fullName={member.fullName}
              role={member.fullName}
              aura={member.aura}
              link={member.link}
            />
          ))}
        </section>
      </body>
    );
  }
}

export default MeetTheTeam;
