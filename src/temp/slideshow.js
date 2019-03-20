export default function showSlide(startIndex) {
  let index = startIndex;
  const slides = document.querySelectorAll('.slides');
  // hide last slide
  if (index !== 0) slides[index - 1].style.display = 'none';
  // reset index to 0 if at end
  if (index >= slides.length) index = 0;
  // show current slide
  slides[index].style.display = 'block';
  // show next slide every 3 seconds
  setTimeout(() => showSlide(index + 1), 3000);
}
