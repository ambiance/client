import React from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import FancyDivider1 from './FancyDivider1';
import FancyDivider2 from './FancyDivider2';
import Footer from './Footer';
import '../css/main.css';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Header />
        <Slideshow />
        <h1 className="splashHeader">What is your aura?</h1>
        <FancyDivider1 />
        <section className="mint landing">
          <p>Everyone is unique.</p>
          <p>People like different things and want to feel great wherever they are.</p>
        </section>
        <FancyDivider2 />
        <section className="light landing">
          <p>
            We'll show you where to go based on
            <span className="bold">what you want to do</span> and the
            <span className="bold">vibe you're going for</span>.
          </p>
          <p>Whether you want to study, socialize, or hold business meetings…</p>
          <p>
            <span className="bold">Aura can get you there.</span>
          </p>
        </section>
        <FancyDivider1 />

        <section className="mint landing last">
          <p>No more drabby places when you want to party.</p>
          <p>No more loud, crowded joints when you want to chill.</p>
          <p>
            <span className="bold">Aura finds the right vibe for you!</span>
          </p>
        </section>
        <Footer />
      </div>
    );
  }
}

export default About;
