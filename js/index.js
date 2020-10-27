const container = document.querySelector('.container');
const url = 'https://api.pokemontcg.io/v1/cards';

async function tcgCards() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    pokemon = json.cards;
    console.log(pokemon);

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
    console.log(error);
  }
}

tcgCards();
