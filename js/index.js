const container = document.querySelector('.container');
const url = 'https://api.pokemontcg.io/v1/cards';
const loaderContainer = document.querySelector('.loader-container');

container.innerHTML = `<div class="loader"></div>`;

async function tcgCards() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    pokemon = json.cards;

    container.innerHTML = '';

    for (let i = 0; i < pokemon.length; i++) {
      if (i === 50) {
        break;
      }

      container.innerHTML += `<a class="card" href="details.html?id=${pokemon[i].id}">
        <img class="pokemon-card" src="${pokemon[i].imageUrl}" alt="pokemon image">
          <div class="card-header">
            <h4 class="card-name">${pokemon[i].name}</h4>
            <p class="card-para">Set: ${pokemon[i].set}</p>
          </div>
          </a>
      `;
    }
  } catch (error) {
    container.innerHTML = displayError('An error occured when loading the API for all the tcg cards');
  }
}

tcgCards();
