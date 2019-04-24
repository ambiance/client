/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Glide } from 'react-glide';
import 'react-glide/lib/reactGlide.css';
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
        <Glide autoPlay autoPlaySpeed={4000} infinite>
          {slideImages.map(slide => (
            <div>
              <Slide img={slide.src} aura={slide.aura} question={slide.question} key={slide.aura} />
            </div>
          ))}
        </Glide>
      </div>
    );
  }
}

export default Slideshow;
