import React from 'react';
import PropTypes from 'prop-types';
import AuraPills from './AuraPills';

class TeamMember extends React.Component {
  auraColorChange = auraString => {
    let colorString = ``;
    switch (auraString) {
      case 'Trendy':
        colorString = `var(--trendy)`;
        break;
      case 'Romantic':
        colorString = `var(--romantic)`;
        break;
      case 'Hipster':
        colorString = `var(--hipster)`;
        break;
      case 'Casual':
        colorString = `var(--casual)`;
        break;
      case 'Inspired':
        colorString = `var(--inspired)`;
        break;
      case 'Intimate':
        colorString = `var(--intimate)`;
        break;
      case 'Classy':
        colorString = `var(--classy)`;
        break;
      case 'Touristy':
        colorString = `var(--touristy)`;
        break;
      case 'Cheerful':
        colorString = `var(--cheerful)`;
        break;
      default:
        colorString = `var(--mint)`;
    }
    const style = colorString;
    return style;
  };
  render() {
    const { sectionId, img, fullName, role, aura, link } = this.props;
    // const auraStyle = {
    //   margin-left: -10px,
    // }

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
            <AuraPills
              id="pills"
              aura={aura}
              backgroundColor={this.auraColorChange(aura)}
              style={{ 'margin-left': 0 }}
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
  backgroundColor: PropTypes.string.isRequired,
};

export default TeamMember;
