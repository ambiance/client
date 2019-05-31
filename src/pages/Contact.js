import React from 'react';
import PropTypes from 'prop-types';

// components
import Head from './Head';
import TeamMember from '../components/TeamMember';
// helpers
import memberObj from '../data/memberInfo';
import background from '../assets/img/trinityBackgroundWhite.png';
// scss
import '../styles/Contact.scss';

class Contact extends React.Component {
  render() {
    const {
      location: { pathname: pathName },
    } = this.props;
    const memberInfo = Object.values(memberObj);
    return (
      <main background={background}>
        <Head pathName={pathName} title="Contact | Aura" />
        <section className="teamMemberGrid">
          {memberInfo.map(member => (
            <TeamMember
              key={member.fullName}
              img={member.src}
              fullName={member.fullName}
              role={member.role}
              mailLink={member.mailLink}
            />
          ))}
        </section>
      </main>
    );
  }
}

Contact.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default Contact;
