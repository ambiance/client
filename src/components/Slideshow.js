import React from 'react';
import Slide from './Slide';
import slideImages from './slideImages';

class Slideshow extends React.Component {
  componentDidMount() {
    const startingIndex = Math.floor(Math.random() * 12);
    this.showSlide(startingIndex);
  }

  showSlide = startIndex => {
    let index = startIndex;
    const slides = document.querySelectorAll('.slides');
    if (index !== 0) slides[index - 1].style.display = 'none';
    if (index >= slides.length) index = 0;
    slides[index].style.display = 'block';
    setTimeout(() => this.showSlide(index + 1), 3000);
  };

  render() {
    return (
      <div className="slideshow">
        {slideImages.map(slide => (
          <Slide img={slide.src} aura={slide.aura} key={slide.aura} />
        ))}
      </div>
    );
  }
}

export default Slideshow;
