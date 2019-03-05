import { setActiveToggle } from './components/page-header/PageHeader.js';
import showSlide from './components/slideshow/slideshow.js';

// setActiveToggle();
showSlide(0);

document
  .getElementById('submitButton')
  .addEventListener('click', insertResults);

const resultsCardsObject = document.querySelector('.resultCards');
// const resultsNum = WhateverBackendGives();
const resultsNum = 5;

function insertResults() {
  resultsCardsObject.innerHTML = getResults();
}

function getResults() {
  let resultsCardsHTML = '';

  for (let i = 0; i < resultsNum; i++) {
    resultsCardsHTML += `
  <div class="resultCard">
    <div class="resultCardImageContainer">
      <img
        class="resultCardImage"
        src="https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg"
      />
    </div>
    <p class="resultCardTitle">
      Address
    </p>
    <p class="resultCardSubtitle">
      Aura
    </p>
  </div>`;
  }

  return resultsCardsHTML;
}
