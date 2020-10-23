const cardDetails = document.querySelector('.container');
const queryString = document.location.search;
const params = new URLSearchParams('queryString');
const id = params.get('id');
const url = 'https://api.pokemontcg.io/v1/cards/xy7-4';

// console.log(params);

async function tcgCard() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    // pokemon = json.cards;
    console.log(json);

    cardDetails.innerHTML = `<div class="card">
          <img class="pokemon-card" src="${json.imageUrlHiRes}" alt="pokemon image">
            <div class="card-header">
              <h4 class="card-name">${json.name}</h4>
              <p class="card-para">Artist: ${pokemon.artist}</hp>
              <p class="card-para">Set: ${pokemon.set}</p>
              <p class="card-para">Series: ${pokemon.series}</p>
              <p class="card-para">PokeDex Number: ${pokemon.nationalPokedexNumber}</p>
              <p class="card-para">Weaknesses: ${pokemon.weaknesses.type}</p>
            </div>
            </div>`;
  } catch (error) {
    // console.log(error);
  }
}

tcgCard();
