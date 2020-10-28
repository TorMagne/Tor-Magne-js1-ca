const cardDetails = document.querySelector('.container');
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
const url = 'https://api.pokemontcg.io/v1/cards/';
const loaderContainer = document.querySelector('.loader-container');

cardDetails.innerHTML = `<div class="loader"></div>`;

async function tcgCard() {
  try {
    const response = await fetch(url + id);
    const json = await response.json();
    pokemon = json.card;

    cardDetails.innerHTML = '';

    cardDetails.innerHTML += `<div class="card">
          <img class="pokemon-card" src="${pokemon.imageUrl}" alt="pokemon image">
            <div class="card-header">
              <h4 class="card-name">${pokemon.name}</h4>
              <p class="card-para">Artist: ${pokemon.artist}</hp>
              <p class="card-para">Set: ${pokemon.set}</p>
              <p class="card-para">Series: ${pokemon.series}</p>
              <p class="card-para">Number: ${pokemon.number}</p>
            </div>
            </div>`;
  } catch (error) {
    cardDetails.innerHTML = displayError('An error occured when loading the details of the tcg card');
  }
}

tcgCard();
