import React from "react";
import Slideshow from "./Slideshow";
import FancyDivider from "./FancyDivider";
import "../css/main.css";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Slideshow />
        {/* <section className="icons">
          <img
            className="icon"
            src="https://media.discordapp.net/attachments/540283031001235477/560874061996228628/People_White.png?width=512&height=450"
          />
          <img
            className="icon"
            src="https://media.discordapp.net/attachments/540283031001235477/560871549674979338/Question_Head_White.png?width=450&height=450"
          />
          <img
            className="icon"
            src="https://media.discordapp.net/attachments/540283031001235477/560868650899341351/WhiteJesus.png?width=450&height=450"
          />
        </section> */}
        <section className="content">
          <section className="mint landing">
            <img
              className="icon"
              src="https://media.discordapp.net/attachments/540283031001235477/560874061996228628/People_White.png?width=512&height=450"
            />
            <p className="minty">Everyone is unique.</p>
            <p className="minty">
              People like different things and want to feel great wherever they
              are.
            </p>
          </section>
          <section className="mint landing">
            <img
              className="icon"
              src="https://media.discordapp.net/attachments/540283031001235477/560871549674979338/Question_Head_White.png?width=450&height=450"
            />
            <p className="minty">
              Whether you want to study, socialize, or hold business meetings…
            </p>
            <p className="minty">Aura can get you there.</p>
          </section>

          <section className="mint landing">
            <img
              className="icon"
              src="https://media.discordapp.net/attachments/540283031001235477/560868650899341351/WhiteJesus.png?width=450&height=450"
            />
            <p className="minty">
              We'll show you where to go based on what you want to do and what
              <span className="bold"> vibe</span> you're going for.
            </p>
          </section>
        </section>
      </div>
    );
  }
}

export default About;
