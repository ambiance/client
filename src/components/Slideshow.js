import React from 'react';
import Slide from './Slide';
import slideImages from './slideImages';

class Slideshow extends React.Component {
  constructor() {
    super();

    this.state = {
      activeSlide: 0,
    };
  }

  componentDidMount() {
    const startingIndex = Math.floor(Math.random() * 12);
    this.setState({ activeSlide: startingIndex });
    this.showSlide();
  }

  componentWillUnmount = () => {
    if (this.timeout) clearTimeout(this.timeout);
  };

  showSlide = () => {
    this.timeout = setTimeout(() => {
      console.log(this.state.activeSlide);
      this.setState(prevState => ({ activeSlide: prevState.activeSlide + 1 }));
      this.showSlide();
    }, 2500);
  };

  render() {
    return (
      <div className="slideshow">
        {slideImages.map((slide, index) =>
          index === this.state.activeSlide ? <Slide img={slide.src} aura={slide.aura} key={slide.aura} /> : ''
        )}
      </div>
    );
  }
}

export default Slideshow;
