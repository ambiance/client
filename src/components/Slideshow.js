import React from 'react';
// components
import { Glide } from 'react-glide';
import Slide from './Slide';
// helpers
import slideImages from '../data/slideImages';
// scss
import '../styles/glide.scss';

class Slideshow extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="slideshow">
        <Glide autoPlay autoPlaySpeed={4000} infinite dots={false}>
          {slideImages.map((slide, i) => (
            <div key={i}>
              <Slide img={slide.src} aura={slide.aura} question={slide.question} />
            </div>
          ))}
        </Glide>
      </div>
    );
  }
}

export default Slideshow;
