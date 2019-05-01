import React from 'react';
import Slideshow from '../components/Slideshow';
import Accordion from '../components/Accordion';
import auraDescriptions from '../data/auraDescriptions';
import '../styles/About.scss';

import CardItem from '../components/CardItem';

class About extends React.Component {
  openModel = business => {
    alert(business);
  };
  render() {
    return (
      <div className="about">
        <Slideshow />

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
              {item.examples.map((business, j) =>
                business._id ? (
                  <div className="resultCardImageContainer">
                    <img
                      className="resultCardImage"
                      style={{ width: '10rem', height: '10rem' }}
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
          ))}
        </Accordion>
      </div>
    );
  }
}

export default About;
