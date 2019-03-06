const numOfCards = 5;

export default function insertResults() {
  const resultsCardsObject = document.querySelector('.resultCards');
  resultsCardsObject.innerHTML = getResults(numOfCards);
}

function getResults() {
  let resultsCardsHTML = '';

  for (let i = 0; i < numOfCards; i++) {
    resultsCardsHTML += /* html */ `
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
    </div>
  `;
  }

  return resultsCardsHTML;
}
