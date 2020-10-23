const cardDetails = document.querySelector('.container');
const queryString = document.location.search;
const params = new URLSearchParams('queryString');
const id = params.get('id');
const url = 'https://api.pokemontcg.io/v1/cards/';

console.log(url);

async function tcgCard() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    pokemon = json.card;
    console.log(pokemon);

    cardDetails.innerHTML = `<div class="card">
          <img class="pokemon-card" src="${pokemon.imageUrlHiRes}" alt="pokemon image">
            <div class="card-header">
              <h4 class="card-name">${pokemon.name}</h4>
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
