import React from 'react';
import PropTypes from 'prop-types';

// components
import Head from './Head';
import Slideshow from '../components/Slideshow';
import Accordion from '../components/Accordion';
// helpers
import auras from '../data/auraDescriptions';
// scss
import '../styles/About.scss';

class About extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  };
  openModel = business => {
    alert(business);
  };
  render() {
    const {
      location: { pathname: pathName },
    } = this.props;
    const auraDescriptions = Object.values(auras);
    return (
      <main className="about">
        <Head pathName={pathName} title="About | Aura" />
        <Slideshow />
        {/* TODO: Candidate for a component */}
        <section className="content">
          <section className="mint landing">
            <img
              className="icon"
              src="https://media.discordapp.net/attachments/540283031001235477/560874061996228628/People_White.png?width=512&height=450"
              alt="People"
            />
            <p className="minty">
              Everyone is <span className="bold">unique</span>.
            </p>
            <p className="minty">
              People like different things and want to feel great wherever they are.
            </p>
          </section>
          <section className="mint landing">
            <img
              className="icon"
              src="https://media.discordapp.net/attachments/540283031001235477/560871549674979338/Question_Head_White.png?width=450&height=450"
              alt="Person questioning something"
            />
            <p className="minty">
              Whether you want to study, socialize, or hold business meetings…
            </p>
            <p className="minty">
              <span className="bold">Aura</span> can get you there.
            </p>
          </section>

          <section className="mint landing">
            <img
              className="icon"
              src="https://media.discordapp.net/attachments/540283031001235477/560868650899341351/WhiteJesus.png?width=450&height=450"
              alt="White Jesus"
            />
            <p className="minty">
              We'll show you where to go based on what you want to do and what
              <span className="bold"> vibe</span> you're going for.
            </p>
          </section>
        </section>
        <Accordion allowMultipleOpen title="Auras">
          {auraDescriptions.map((item, i) => (
            <div key={i} label={item.aura}>
              <h3>{item.definition}</h3>
              <hr />
              <p>{item.description}</p>
              <div className="accordionImages">
                {item.examples.map((business, j) =>
                  business.businessImage ? (
                    <div key={j} className="accordionImageContainer">
                      <img
                        className="accordionImage"
                        src={
                          business.businessImage.src
                            ? business.businessImage.src
                            : 'http://mymodernmet.com/wp/wp-content/uploads/2017/10/azuki-camping-hedgehog-3.jpg'
                        }
                        alt={
                          business.businessImage.owner
                            ? business.businessImage.owner
                            : 'No image owner provided'
                        }
                      />
                    </div>
                  ) : (
                    ''
                  )
                )}
              </div>
            </div>
          ))}
        </Accordion>
      </main>
    );
  }
}

export default About;
