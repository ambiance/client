import React from 'react';
import { Glide } from 'react-glide';
import '../styles/glide.scss';
import Slide from './Slide';
import slideImages from '../data/slideImages';

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
