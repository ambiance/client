import { setActiveToggle } from './components/page-header/PageHeader.js';
import showSlide from './components/slideshow/slideshow.js';
import insertResults from './components/result-card/ResultCard.js';

document.getElementById('submitButton').addEventListener('click', insertResults);

// setActiveToggle();
showSlide(0);
