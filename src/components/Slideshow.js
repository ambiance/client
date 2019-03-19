import React from "react";
import Slide from "./Slide";
import slideImages from "./slideImages";

class Slideshow extends React.Component {
  componentDidMount() {
    const startingIndex = Math.floor(Math.random() * 12);
    this.showSlide(startingIndex);
  }

<<<<<<< HEAD
  showSlide = (startIndex) => {
=======
  componentWillUnmount = () => {
    if (this.timeout) clearTimeout(this.timeout);
  };

  showSlide = startIndex => {
>>>>>>> 97be9114015eef3f39b8e970b75fa47d21bc0521
    let index = startIndex;
    const slides = document.querySelectorAll(".slides");
    if (index !== 0) slides[index - 1].style.display = "none";
    if (index >= slides.length) index = 0;
<<<<<<< HEAD
    slides[index].style.display = "block";
    setTimeout(() => this.showSlide(index + 1), 3000);
=======
    slides[index].style.display = 'block';
    this.timeout = setTimeout(() => this.showSlide(index + 1), 3000);
>>>>>>> 97be9114015eef3f39b8e970b75fa47d21bc0521
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
