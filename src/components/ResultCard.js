const sampleCardCount = 20;

document
  .getElementById("submitButton")
  .addEventListener("click", insertResults);

async function insertResults(event) {
  event.preventDefault();
  const resultsCardsObject = document.querySelector(".resultCards");
  const businessData = await fetch(
    "https://aurelia-server.herokuapp.com/api/resources"
  )
    .then(response => response.json())
    .then(myJson => myJson);
  resultsCardsObject.innerHTML = getResults(sampleCardCount, businessData);
}

function parseAuras(auras) {
  return auras.split(", ");
}

function getResults(numOfCards, businessData) {
  let resultsCardsHTML = "";

  for (let i = 0; i < numOfCards; i++) {
    const business = businessData[i];
    const businessAuras = parseAuras(business.attributes.Aura);
    resultsCardsHTML += /* html */ `
    <div class="resultCard">
      <div class="resultCardImageContainer">
        <img
          class="resultCardImage"
          src="${businessData[i].img
            || 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg"'}"
        />
      </div>
      <span class="resultCardTitle">
        ${business.name}
      </span>
      <span class="resultCardSubtitle">
        ${business.address}
      </span>
      <span class="resultCardSubtitle">
        ${business.city}, ${business.state} ${business.postal_code}
      </span>
      <span class="resultCardAura">
        ${businessAuras[0]}${businessAuras[1] ? ` / ${businessAuras[1]}` : ""}
      </span>
    </div>
  `;
  }

  return resultsCardsHTML;
}
